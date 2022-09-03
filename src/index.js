const path = require("path")
const express = require("express")
const Queue = require("bull")
const yup = require("yup");
const app = express();

const clipQueue = new Queue("clips_to_process")

app.use(express.static(path.resolve(__dirname, "..", "storage")))

app.use(express.json())

app.post("/clips", async (req, res) => {
    try {
        const body = req.body;
        let schema = yup.object().shape({
            input: yup.string().required(),
            start: yup.string().required(),
            duration: yup.number().required(),
            output: yup.string().required()
        });
    
        await schema.validate(body)
        await clipQueue.add(body, { attempts: 2 })
        res.sendStatus(201);
    } catch(error) {
        if (error.name == 'ValidationError') {
            return res.status(400).json({
                errors: error.errors
            })
        }

        return res.sendStatus(500)
    }
    
})

app.listen(3000, () => {
    console.log(`Server is running`)
})
