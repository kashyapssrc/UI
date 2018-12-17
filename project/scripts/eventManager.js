var eventManager = {};

    var listener = [];

    eventManager.subscribe = function(eventName,handler) {
        listener[eventName] = handler;
    }

    eventManager.broadcast = function(eventName, data) {

        var handler = listener[eventName];
        handler(data);
        // for(var handler in handlers) {
            // handler(data);
        // }
    }
