import express from "express"
import { router } from "./routes/login"
import bodyParser from "body-parser"
import cookieSession from "cookie-session"

// create app
const app = express()

// middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({keys: ['verysecretdummystring']}))

// routes
app.use(router)

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
