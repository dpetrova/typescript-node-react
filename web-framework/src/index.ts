import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.build({ name: "Misho", age: 22 });
const root = document.getElementById('root')
if(root) {
    const userEdit = new UserEdit(root, user)
    userEdit.render()
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
