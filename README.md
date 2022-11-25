Converts the message payloads from one unit to another.

### Convert code

The node will take in the `msg.payload`, convert it to the target unit and
output the converted payload.

![Convert Node](images/example.png)

`msg.payload` is used for the conversation from one unit to another. If the
payload is not a number, the node will fail. If a unit is unknown or a conversation
from one unit to another is not possible, an error will be reported.

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