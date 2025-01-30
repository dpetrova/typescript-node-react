import { User, UserProps } from "../models/User"
import { ViewCollection } from "./ViewCollection"
import { UserShow } from "./UserShow"

export class UserList extends ViewCollection<User, UserProps> {
    rederItem(model: User, itemParent: Element): void {
        new UserShow(itemParent, model).render()
    }
}