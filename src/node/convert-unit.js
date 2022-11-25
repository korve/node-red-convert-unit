const convert = require("convert-units")

module.exports = function ConvertUnitNodeInitializer(RED) {
	function ConvertUnitNode(config) {
		const node = this
		RED.nodes.createNode(node, config)

		node.on("input", (msg, send, done) => {
			send = send || function () {
				node.send.apply(node, arguments)
			}

			var from = msg.from || config.from
			var to = msg.to || config.to

			try {
				msg.payload = convert(msg.payload).from(from).to(to)
				send(msg)
			} catch (e) {
				if (done) {
					// Node-RED 1.0 compatible
					done(e)
				} else {
					// Node-RED 0.x compatible
					node.error(e, msg)
				}
				return
			}

			if (done) {
				done()
			}
		})
	}

	RED.nodes.registerType("convert-unit", ConvertUnitNode)
}
