import { Model } from "./Model";

export interface UserProps {
  id?: number; //optional prop
  name?: string; //optional prop
  age?: number; //optional prop
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {}
