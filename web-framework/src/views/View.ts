import { Model } from "../models/Model";
import { HasId } from "../models/HasId";

export abstract class View<T extends Model<K extends HasId>, K> {
    constructor(public parent: Element, public model: T) {
        // rerender when change of model occurs
        this.model.on("change", () => {
            this.render()
        })
    }
    
    abstract template(): string

    eventsMap(): { [key: string]: () => void } {
        return {}
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap()

        for (const eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':')
            fragment.querySelectorAll(selector).forEach(el => {
                el.addEventListener(eventName, eventsMap[eventKey])
            })
        }
    }

    render(): void {
        // empty the current content
        this.parent.innerHTML = ''
        // create template
        const templateElement = document.createElement('template')
        // setup html 
        templateElement.innerHTML = this.template()
        // setup event handlers
        this.bindEvents(templateElement.content)
        // append html to parent
        this.parent.append(templateElement.content)
    }
}