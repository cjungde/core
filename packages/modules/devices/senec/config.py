from typing import Optional
from helpermodules.auto_str import auto_str
from modules.common.component_setup import ComponentSetup


@auto_str
class SenecBatterieConfiguration:
    def __init__(self, variant: int = 0, ip_address: Optional[str] = None):
        self.variant = variant
        self.ip_address = ip_address

@auto_str
class SenecBatterie:
    def __init__(self,
                 name: str = "SenecBatterie",
                 type: str = "senecbatterie",
                 id: int = 0,
                 configuration: SenecBatterieConfiguration = None) -> None:
        self.name = name
        self.type = type
        self.id = id
        self.configuration = configuration or SenecBatterieConfiguration()

@auto_str
class SenecbatterieBatConfiguration:
    def __init__(self):
        pass

@auto_str
class SenecbatterieBatSetup(ComponentSetup[SenecbatterieBatConfiguration]):
    def __init__(self,
                 name: str = "SenecBatterie Speicher",
                 type: str = "bat",
                 id: int = 0,
                 configuration: SenecbatterieBatConfiguration = None) -> None:
        super().__init__(name, type, id, configuration or SenecbatterieBatConfiguration())

@auto_str
class SenecbatterieCounterConfiguration:
    def __init__(self):
        pass

@auto_str
class SenecbatterieCounterSetup(ComponentSetup[SenecbatterieCounterConfiguration]):
    def __init__(self,
                 name: str = "SenecBatterie Zähler",
                 type: str = "counter",
                 id: int = 0,
                 configuration: SenecbatterieCounterConfiguration = None) -> None:
        super().__init__(name, type, id, configuration or SenecbatterieCounterConfiguration())

@auto_str
class SenecbatterieInverterConfiguration:
    def __init__(self):
        pass

@auto_str
class SenecbatterieInverterSetup(ComponentSetup[SenecbatterieInverterConfiguration]):
    def __init__(self,
                 name: str = "SenecBatterie Wechselrichter",
                 type: str = "inverter",
                 id: int = 0,
                 configuration: SenecbatterieInverterConfiguration = None) -> None:
        super().__init__(name, type, id, configuration or SenecbatterieInverterConfiguration())
