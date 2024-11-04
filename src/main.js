import e from "express"
import presence_router from "./routers/presence-router.js"
import student_router from "./routers/student-router.js"
import "dotenv/config"
import "./db.js"

const app = e()

app.use(e.json())

app.use("/estudante", student_router)
app.use("/presenca", presence_router)

app.listen(process.env.API_PORT, () => {
    console.log("Conectado com o servidor")
})