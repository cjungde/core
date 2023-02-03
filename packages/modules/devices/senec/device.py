#!/usr/bin/env python3
import logging
from typing import Iterable, Optional, Union, List

from helpermodules.cli import run_using_positional_cli_args
from modules.common import req
from modules.common.abstract_device import DeviceDescriptor
from modules.common.configurable_device import ConfigurableDevice, ComponentFactoryByType, MultiComponentUpdater
from modules.devices.senec import bat, counter, inverter
from modules.devices.senec.bat import SenecBat
from modules.devices.senec.config import Senec, SenecConfiguration, SenecBatSetup, SenecCounterSetup, SenecInverterSetup
from modules.devices.senec.counter import SenecCounter
from modules.devices.senec.inverter import SenecInverter

log = logging.getLogger(__name__)


def create_device(device_config: Senec):
    def create_bat_component(component_config: SenecBatSetup):
        return SenecBat(device_config.id, component_config)

    def create_counter_component(component_config: SenecCounterSetup):
        return SenecCounter(device_config.id, component_config)

    def create_inverter_component(component_config: SenecInverterSetup):
        return SenecInverter(device_config.id, component_config)

    def update_components(components: Iterable[Union[SenecBat, SenecCounter, SenecInverter]]):
        response = req.get_http_session().get(device_config.configuration.ip_address, timeout=5).json()
        for component in components:
            component.update(response)

    return ConfigurableDevice(
        device_config=device_config,
        component_factory=ComponentFactoryByType(
            bat=create_bat_component,
            counter=create_counter_component,
            inverter=create_inverter_component,
        ),
        component_updater=MultiComponentUpdater(update_components)
    )


COMPONENT_TYPE_TO_MODULE = {
    "bat": bat,
    "counter": counter,
    "inverter": inverter
}


def read_legacy(component_type: str, ip_address: str, id: int, num: Optional[int]) -> None:
    device_config = Senec(configuration=SenecConfiguration(ip_address=ip_address, id=id))
    dev = create_device(device_config)
    if component_type in COMPONENT_TYPE_TO_MODULE:
        component_config = COMPONENT_TYPE_TO_MODULE[component_type].component_descriptor.configuration_factory()
    else:
        raise Exception(
            "illegal component type " + component_type + ". Allowed values: " +
            ','.join(COMPONENT_TYPE_TO_MODULE.keys())
        )
    component_config.id = num
    dev.add_component(component_config)

    log.debug('Senec IP-Adresse: ' + ip_address)
    log.debug('Senec ID: ' + str(id))

    dev.update()
    # Hier kann es notwendig sein, für 1.9 eine eigene Update-Methode zu implemenitieren, die die Werte wie benötigt miteinander verrechnet.
    # Hier muss auch bei Hybrid-Systemen die Speicher-und PV-Leistung verrechnet werden.


def main(argv: List[str]):
    run_using_positional_cli_args(read_legacy, argv)


device_descriptor = DeviceDescriptor(configuration_factory=Senec)
