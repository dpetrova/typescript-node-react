import { User, UserProps } from "./models/User";
import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserEdit } from "./views/UserEdit";

/* render form for new user */
// const user = User.build({ name: "New User", age: 0 });
// const root = document.getElementById('root')
// if(root) {
//     const userEdit = new UserEdit(root, user)
//     userEdit.render()
// } else {
//     throw new Error("Root element not found")
// }


/* fetch and render collection of users */
const users = new Collection("http://localhost:3000/users", (json: UserProps) => {
    return User.build(json);
})

users.on("change", () => {
    const root = document.getElementById('root')
    if(root) {
        new UserList(root, users).render()
    } else {
        throw new Error("Root element not found")
    }
});

users.fetch();




