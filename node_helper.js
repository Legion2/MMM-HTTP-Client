const NodeHelper = require("node_helper");
const fetch = require("node-fetch");
module.exports = NodeHelper.create({
    socketNotificationReceived: function (notification, payload) {
        if (notification == "DO_HTTP_REQUEST") {
            fetch(payload.url, payload.options || {}).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            }).catch(err => {
                console.log(err);
            });
        }
    },
});
