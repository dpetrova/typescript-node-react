import { View } from "./View"
import { User, UserProps } from "../models/User"

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-name': this.onSetNameClick,
            'mouseenter:h1': this.onHeaderHover,
            'click:.set-age': this.onSetAgeClick,
            'click:.save-model': this.onSaveClick,
        }
    }

    onSaveClick = (): void => {
        this.model.save()
    }

    onSetNameClick = (): void => {
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
                <input placeholder="${this.model.get('name')}" />
                <button class="set-name">Set name</button>
                <button class="set-age">Set random age</button>
                <button class="save-model">Save</button>
            </div>
        `
    }    
}