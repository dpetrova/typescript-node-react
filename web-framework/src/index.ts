import { User } from "./models/User";

const user = new User({name: "Hristo", age: 52})

// user.save()

user.events.on('change', () => {
    console.log("Change #1 was triggered")
})
user.events.on('change', () => {
    console.log("Change #2 was triggered")
})
user.events.on('remove', () => {
    console.log("Remove was triggered")
})

user.events.trigger('change')
user.events.trigger('remove')
user.events.trigger('noSuchEvent')

