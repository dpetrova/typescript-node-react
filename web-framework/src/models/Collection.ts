import axios, { AxiosPromise, AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  // deserialize function will get argument of type K and return something of type T
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios
      .get(this.rootUrl)
      .then((res: AxiosResponse): void => {
        res.data.forEach((item: K) => {
          this.models.push(this.deserialize(item));
        });

        this.trigger("change");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
