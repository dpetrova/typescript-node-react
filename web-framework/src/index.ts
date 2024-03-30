import { User } from "./models/User";

const user = new User({ name: "Hristo", age: 52 });
console.log(user.get("name"));

user.on("change", () => {
  console.log("Change #1 was triggered");
});
user.on("change", () => {
  console.log("Change #2 was triggered");
});
user.on("remove", () => {
  console.log("Remove was triggered");
});

user.trigger("change");
user.trigger("remove");
user.trigger("noSuchEvent");
