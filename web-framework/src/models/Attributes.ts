import { UserProps } from "./User";

export class Attributes<T> {
  /* data is object to store information about a particular record */
  constructor(private data: T) {}

  /* get a single piece of data about this record */
  // K extends keyof T -> generic constraint that limit different types that K can be (type of K can only be one of the keys of T)
  // T[K] -> return type is type of value of T[K]
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  /* change data about this record */
  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

/* example */
// T is UserProps
const attrs = new Attributes<UserProps>({
  id: 5, // K is "id", T[K] is of type number
  name: "Pesho", // K is "name", T[K] is of type string
  age: 44, // K is "age", T[K] is of type number
});

const name = attrs.get("name");
// const d = attrs.get('nokey'); // cannot call get with "nokey", because such key does not exist in UserProps
const age = attrs.get("age");
