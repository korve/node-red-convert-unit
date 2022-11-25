Converts the message payloads from one unit to another.

### Convert code

The node will take in the `msg.payload`, convert it to the target unit and
output the converted payload.

![Convert Node](images/example.png)

`msg.payload` is used for the conversation from one unit to another. If the
payload is not a number, the node will fail. If a unit is unknown or a conversation
from one unit to another is not possible, an error will be reported.

## Supported units

### Length

 - mm
 - cm
 - m
 - in
 - ft-us
 - ft
 - mi

### Area

 - mm2
 - cm2
 - m2
 - ha
 - km2
 - in2
 - ft2
 - ac
 - mi2

### Mass

 - mcg
 - mg
 - g
 - kg
 - oz
 - lb
 - mt
 - t

### Volume

 - mm3
 - cm3
 - ml
 - l
 - kl
 - m3
 - km3
 - tsp
 - Tbs
 - in3
 - fl-oz
 - cup
 - pnt
 - qt
 - gal
 - ft3
 - yd3

### Volume Flow Rate

 - mm3/s
 - cm3/s
 - ml/s
 - cl/s
 - dl/s
 - l/s
 - l/min
 - l/h
 - kl/s
 - kl/min
 - kl/h
 - m3/s
 - m3/min
 - m3/h
 - km3/s
 - tsp/s
 - Tbs/s
 - in3/s
 - in3/min
 - in3/h
 - fl-oz/s
 - fl-oz/min
 - fl-oz/h
 - cup/s
 - pnt/s
 - pnt/min
 - pnt/h
 - qt/s
 - gal/s
 - gal/min
 - gal/h
 - ft3/s
 - ft3/min
 - ft3/h
 - yd3/s
 - yd3/min
 - yd3/h'

### Temperature

 - C
 - F
 - K
 - R

### Time

 - ns
 - mu
 - ms
 - s
 - min
 - h
 - d
 - week
 - month
 - year

### Frequency

 - Hz
 - mHz
 - kHz
 - MHz
 - GHz
 - THz
 - rpm
 - deg/s
 - rad/s

### Speed

 - m/s 
 - km/h 
 - m/h 
 - knot 
 - ft/s

### Pace

 - s/m 
 - min/km 
 - s/ft 
 - min/km

### Pressure

 - Pa
 - hPa
 - kPa
 - MPa
 - bar
 - torr
 - psi
 - ksi

### Digital

 - b
 - Kb
 - Mb
 - Gb
 - Tb
 - B
 - KB
 - MB
 - GB
 - TB

### Illuminance

 - lx
 - ft-cd

### Parts-Per

 - ppm
 - ppb
 - ppt
 - ppq

### Voltage

 - V
 - mV
 - kV

### Current

 - A
 - mA
 - kA

### Power

 - W
 - mW
 - kW
 - MW
 - GW

### Apparent Power

 - VA
 - mVA
 - kVA
 - MVA
 - GVA

### Reactive Power

 - VAR
 - mVAR
 - kVAR
 - MVAR
 - GVAR

### Energy

 - Wh
 - mWh
 - kWh
 - MWh
 - GWh
 - J
 - kJ

### Reactive Energy

 - VARh
 - mVARh
 - kVARh
 - MVARh
 - GVARh

### Angle

 - deg
 - rad
 - grad
 - arcmin
 - arcsec

## Example Flows

See the `examples` folder for some example flows.

## License

Copyright 2022 Andre Eckardt

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Attribution

The following icons have been taken from Node-RED provided nodes:
* Calculator icon (Fontawesome provided by Node-RED)

For the conversation from one unit to another, the [convert-units](https://www.npmjs.com/package/convert-units) package by Ben Ng and Contributors has been used. See the repository for their license.