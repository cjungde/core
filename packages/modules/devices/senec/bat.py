#!/usr/bin/env python3
from dataclass_utils import dataclass_from_dict
from modules.common.component_state import BatState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo
from modules.common.store import get_bat_value_store
from modules.devices.senec.config import SenecBatSetup


class SenecBat:
    def __init__(self, device_id: int, component_config: SenecBatSetup) -> None:
        self.__device_id = device_id
        self.component_config = dataclass_from_dict(SenecBatSetup, component_config)
        self.store = get_bat_value_store(self.component_config.id)
        self.component_info = ComponentInfo.from_component_config(self.component_config)

    def update(self, response) -> None:
        
        bat_state = BatState(
            power=round(response["ENERGY"]['GUI_BAT_DATA_POWER'],2),
            soc=round(response["ENERGY"]['GUI_BAT_DATA_FUEL_CHARGE'],2),
            imported=(round(response["STATISTIC"]['LIVE_BAT_CHARGE'],3))*1000,
            exported=(round(response["STATISTIC"]['LIVE_BAT_DISCHARGE'],3))*1000
        )
        self.store.set(bat_state)


component_descriptor = ComponentDescriptor(configuration_factory=SenecBatSetup)
