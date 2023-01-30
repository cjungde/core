import json
import sys

#import os

from senec import Senec

#read config.json
with open('config.json') as config_file:
  config = json.load(config_file)

#init api
api = Senec(config['senec_ip'])
#api = Senec('192.168.25.48')

if not api:
  sys.exit
data=api.get_values()




print("Geraeteinformationen")
print("Aktueller Status    : {0}".format(data["STATISTIC"]['CURRENT_STATE']))
print("Kapazitaet          : {0}".format(data["FACTORY"]['DESIGN_CAPACITY']))
print("Ladeleistung        : {0}".format(data["FACTORY"]['MAX_CHARGE_POWER_DC']))
print("Entladeleistung     : {0}".format(data["FACTORY"]['MAX_DISCHARGE_POWER_DC']))
#print("MCU Firmwareversion : {0}".format(data["WIZARD"]['APPLICATION_VERSION']))
#print("Steuerungs - SN     : {0}".format(data["FACTORY"]['DEVICE_ID']))

print("")
print("Batterie - Fuellstand        : {0} %".format(round(data["ENERGY"]['GUI_BAT_DATA_FUEL_CHARGE'],2)))
print("Batterie - Laden/Entladen    : {0} W".format(round(data["ENERGY"]['GUI_BAT_DATA_POWER'],2)))
print("Power - Einspeisung / Bezug  : {0} W".format(round(data["ENERGY"]['GUI_GRID_POW'],2)))
print("Power - Hausverbrauch        : {0} W".format(round(data["ENERGY"]['GUI_HOUSE_POW'],2)))
print("Power - PV Leistung          : {0} W".format(round(data["ENERGY"]['GUI_INVERTER_POWER'],2)))
print("")
print("PV Leistung - String 1       : {0} W".format(round(data["PV1"]['MPP_POWER'][0],2)))
print("PV Leistung - String 2       : {0} W".format(round(data["PV1"]['MPP_POWER'][1],2)))
print("PV Leistung - String 3       : {0} W".format(round(data["PV1"]['MPP_POWER'][2],2)))
print("PV Export Ratio              : {0} %".format(round(data["PV1"]['POWER_RATIO'],2)))


print("Frequency                    : {0} Hz".format(round(data["PM1OBJ1"]['FREQ'],2)))
print("Spannung (1)                 : {0} V".format(round(data["PM1OBJ1"]['U_AC'][0],2)))
print("Spannung (2)                 : {0} V".format(round(data["PM1OBJ1"]['U_AC'][1],2)))
print("Spannung (3)                 : {0} V".format(round(data["PM1OBJ1"]['U_AC'][2],2)))
print("Strom (1)                    : {0} A".format(round(data["PM1OBJ1"]['I_AC'][0],2)))
print("Strom (2)                    : {0} A".format(round(data["PM1OBJ1"]['I_AC'][1],2)))
print("Strom (3)                    : {0} A".format(round(data["PM1OBJ1"]['I_AC'][2],2)))
print("Leistung (1)                 : {0} W".format(round(data["PM1OBJ1"]['P_AC'][0],2)))
print("Leistung (2)                 : {0} W".format(round(data["PM1OBJ1"]['P_AC'][1],2)))
print("Leistung (3)                 : {0} W".format(round(data["PM1OBJ1"]['P_AC'][2],2)))
print("Gesamtleistung               : {0} W".format(round(data["PM1OBJ1"]['P_TOTAL'],2)))