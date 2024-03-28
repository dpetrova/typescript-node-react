import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
    id?: number; //optional prop
    name?: string; //optional prop
    age?: number //optional prop
}

const rootUrl = 'http://localhost:3000/users'

export class User {
    public events: Eventing = new Eventing()
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)

    
}