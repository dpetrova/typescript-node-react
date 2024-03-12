import { User } from "./models/User";

const user = new User({name: "Mincho", age: 44})

user.on('change', () => {
    console.log("Change #1 was triggered")
})
user.on('change', () => {
    console.log("Change #2 was triggered")
})
user.on('remove', () => {
    console.log("Remove was triggered")
})

user.trigger('change')
user.trigger('remove')
user.trigger('noSuchEvent')