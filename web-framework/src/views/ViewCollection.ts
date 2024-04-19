import { Collection } from "../models/Collection";

export abstract class ViewCollection<T, K> {
    constructor(public parent: Element, public collection: Collection<T, K>) { }
    
    abstract rederItem(model: T, itemParent: Element): void    

    render(): void {
        // empty the current content
        this.parent.innerHTML = ''
        // create template
        const templateElement = document.createElement('template')
        // iterate over collection and render each item
        for (const model of this.collection.models) {
            const itemParent = document.createElement('div')
            this.rederItem(model, itemParent)
            templateElement.content.append(itemParent)
        }       
        // append html to parent
        this.parent.append(templateElement.content)
    }
}