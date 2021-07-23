const listeners = [];


const on = (event, callback) => {

    const listener = {
        event,
        callback,
        cancel: () => {
            listeners.splice( listeners.indexOf(this) );
        },
    }

    listeners.push(listener);
    return listener;

};


const run = (event, payload) => {

    console.log(`Event triggered: ${event}`);

    const on_event = listeners.filter(listener => listener.event === event);
    for( listener of on_event ) {
        listener.callback(payload);
    }

};


module.exports = {
    on,
    run,
}