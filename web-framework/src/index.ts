import { User } from "./models/User";

const user = new User({ name: "New", age: 12 });

user.on("change", () => {
  console.log("Change was triggered");
});

user.on("save", () => {
  console.log("Save was triggered");
});

// user.save();
// user.set({ name: "Mincho" });
console.log(user.get("name"));
