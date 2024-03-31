import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";

const collection = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (json: UserProps) => User.build(json)
);
collection.on("change", () => {
  console.log(collection);
});
collection.fetch();

// const user = User.build({ id: 1 });

// user.on("change", () => {
//   console.log(user);
// });

// user.on("save", () => {
//   console.log("Save was triggered");
// });

// user.fetch();
// // user.save();
// // user.set({ name: "Mincho" });
// console.log(user.get("name"));
