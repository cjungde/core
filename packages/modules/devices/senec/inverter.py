#!/usr/bin/env python3
from dataclass_utils import dataclass_from_dict
from modules.common.component_state import InverterState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo
from modules.common.simcount import SimCounter
from modules.common.store import get_inverter_value_store
from modules.devices.senec.config import SenecInverterSetup


class SenecInverter:
    def __init__(self, device_id: int, component_config: SenecInverterSetup) -> None:
        self.__device_id = device_id
        self.component_config = dataclass_from_dict(SenecInverterSetup, component_config)
       
        self.store = get_inverter_value_store(self.component_config.id)
        self.component_info = ComponentInfo.from_component_config(self.component_config)

    def update(self, response) -> None:
     

        inverter_state = InverterState(
            #currents=currents,
            power=round(response["ENERGY"]['GUI_INVERTER_POWER'],2),
            exported=round(response["STATISTIC"]['LIVE_PV_GEN']*1000,2),
            #dc_power=dc_power
        )
        self.store.set(inverter_state)


component_descriptor = ComponentDescriptor(configuration_factory=SenecInverterSetup)
