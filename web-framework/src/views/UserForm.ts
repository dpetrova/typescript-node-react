import { User } from "../models/User"

export class UserForm {
    constructor(public parent: Element, public model: User) {
        // rerender when change of model occurs
        this.model.on("change", () => {
            this.render()
        })
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.submit': this.onSubmitClick,
            'mouseenter:h1': this.onHeaderHover,
            'click:.set-age': this.onSetAgeClick,
        }
    }

    onSubmitClick = (): void => {
        const input = this.parent.querySelector('input')
        if(input) {
            const name = input.value
            this.model.set({name})
        }        
    }

    onHeaderHover(): void {
        console.log("Header was hovered!")
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>Name: ${this.model.get("name")}</div>
                <div>Age: ${this.model.get("age")}</div>
                <input />
                <button class="submit">Submit</button>
                <button class="set-age">Set random age</button>
            </div>
        `
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