import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    regions: {[key: string]: Element} = {}

    constructor(public parent: Element, public model: T) {
        // rerender when change of model occurs
        this.model.on("change", () => {
            this.render()
        })
    }
    
    // required method
    abstract template(): string

    // optional methods
    regionsMap(): { [key: string]: string } {
        return {}
    }

    onRender(): void {}

    eventsMap(): { [key: string]: () => void } {
        return {}
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap()
        // iterate regionsMap to find all querySelectors
        for (const key in regionsMap) {
            const selector = regionsMap[key]
            const element = fragment.querySelector(selector)
            if(element) this.regions[key] = element            
        }
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
        // find any nested views
        this.mapRegions(templateElement.content)
        // setup rendering of nested views
        this.onRender()

        // append html to parent
        this.parent.append(templateElement.content)
    }
}