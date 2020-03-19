# MMM-HTTP-Client
Do HTTP requests triggered by notifications from the MagicMirror Server.

This module use the [Browser Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) on the node.js backend to do the actual http requests.
The [node-fetch](https://www.npmjs.com/package/node-fetch) packages is used to port the Fetch API to node.js.

This module does not provide any visual component, it's only an utility used by other modules via the notification mechanism of MagicMirror.

```js
this.sendNotification("MMM-HTTP-Client-REQUEST", {
    url: "https://example.com/api/webhook",
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: 17 })
    }
});
```

Because the `fetch()` is executed on the node.js server, there are less restrictions on the requests you can do.
You don't have to care about Cross-Origin, Content Security Policy and Mixed Content.
But there are also downsides and limitations.
You can read more about them in the [node-fetch docs](https://github.com/node-fetch/node-fetch/blob/master/docs/v2-LIMITS.md).

## Installation

```shell
cd modules
git clone https://github.com/Legion2/MMM-HTTP-Client.git
cd MMM-HTTP-Client
npm install
```

## Module notifications

| Notification              | Payload | Description                                                                                                                                                                                                                                                                                                          |
|---------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MMM-HTTP-Client-REQUEST` | object  | Do a http request from the node.js server. The payload is the request object, which must define the `url` of the request and can also define an optional `options` object for the `fetch()` call, see [init parameter](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters). |
