Module.register("MMM-HTTP-Client", {
    notificationReceived: function (notification, payload, sender) {
        if (notification == "MMM-HTTP-Client-REQUEST") {
            this.sendSocketNotification("DO_HTTP_REQUEST", payload);
        }
    }
});
