import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.build({ name: "Misho", age: 22 });
const root = document.getElementById('root')
if(root) {
    const userForm = new UserForm(root, user)
    userForm.render()
} else {
    throw new Error("Root element not found")
}



// const collection = User.buildCollection()
// collection.on("change", () => {
//   console.log(collection);
// });
// collection.fetch();

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
