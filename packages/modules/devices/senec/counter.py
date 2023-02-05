#!/usr/bin/env python3
from dataclass_utils import dataclass_from_dict
from modules.common.component_state import CounterState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo
from modules.common.store import get_counter_value_store
from modules.devices.senec.config import SenecCounterSetup
from modules.devices.senec.senec_device import Senec_Connection
import logging

log = logging.getLogger(__name__)


class SenecCounter:
    def __init__(self, device_id: int, component_config: SenecCounterSetup) -> None:
        self.__device_id = device_id
        self.component_config = dataclass_from_dict(SenecCounterSetup, component_config)
        self.store = get_counter_value_store(self.component_config.id)
        self.component_info = ComponentInfo.from_component_config(self.component_config)

    def update(self, response):

        counter_state = CounterState(
            currents=[round(response["PM1OBJ1"]['I_AC'][0],2),round(response["PM1OBJ1"]['I_AC'][1],2),round(response["PM1OBJ1"]['I_AC'][2],2)],
            imported=round(response["STATISTIC"]['LIVE_GRID_IMPORT'],2),
            exported=round(response["STATISTIC"]['LIVE_GRID_EXPORT'],2),
            power=round(response["PM1OBJ1"]['P_TOTAL'],2),
            frequency=round(response["PM1OBJ1"]['FREQ'],2),
            #power_factors=power_factors,
            powers=[round(response["PM1OBJ1"]['P_AC'][0],2),round(response["PM1OBJ1"]['P_AC'][1],2),round(response["PM1OBJ1"]['P_AC'][2],2)],
            voltages=[round(response["PM1OBJ1"]['U_AC'][0],2),round(response["PM1OBJ1"]['U_AC'][1],2),round(response["PM1OBJ1"]['U_AC'][2],2)],
        )
        self.store.set(counter_state)


component_descriptor = ComponentDescriptor(configuration_factory=SenecCounterSetup)
