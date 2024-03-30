// type alias for callback function (no argument, no return value)
type Callback = () => void;

export class Eventing {
  /* object to store events (key will be the name of event, value will be array of callbacks) */
  events: { [key: string]: Callback[] } = {};

  /* register an event handler, so other parts of the app to know when something changes */
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  /* trigger an event to tell other parts of the app that something changes */
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || !handlers.length) return;

    // run all the stored callbacks
    handlers.forEach((callback) => {
      callback();
    });
  };
}
