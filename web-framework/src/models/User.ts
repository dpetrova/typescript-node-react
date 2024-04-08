import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number; //optional prop
  name?: string; //optional prop
  age?: number; //optional prop
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  // static method that gives a preconfigured user as initialize attrs, sync and events
  static build(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootUrl,
      (json: UserProps) => User.build(json)
    );
  }

  setRandomAge() {
    const age = Math.round(Math.random() * 100)
    this.set({ age })
  }
}
