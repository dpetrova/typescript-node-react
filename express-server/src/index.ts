import express, {Request, Response} from "express"

// create app
const app = express()

// routes
app.get('/', (req: Request, res: Response) => {
    res.send(
        `<div>
            <h1>Ni there!</h1>
        </div>`
    )
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
