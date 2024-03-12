interface UserProps {
    name?: string; //optional prop
    age?: number //optional prop
}

// type alias for callback function (no argument, no return value)
type Callback = () => void

export class User {
    /* object to store events (key will be the name of event, value will be array of callbacks) */
    events: { [key: string]: Callback[] } = {} 

    /* data is object to store information about a particular user */
    constructor(private data: UserProps) { }

    /* get a single piece of data about this user */
    get(propName: string): (string | number) {
        return this.data[propName]
    }

    /* change data about this user */
    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

    /* register an event handler, so other parts of the app to know when something changes */
    on(eventName: string, callback: Callback): void { 
        const handlers = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers
    }

    /* trigger an event to tell other parts of the app that something changes */
    trigger(eventName: string): void {
        const handlers = this.events[eventName]
        if(!handlers || !handlers.length) return

        // run all the stored callbacks
        handlers.forEach(callback => {
            callback()
        })
    }

    /* fetch data about a particular user from the server */
    fetch() {}

    /* save data about this user to the server */
    save() {}
}