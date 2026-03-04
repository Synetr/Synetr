import express from "express"

const app = express()
const PORT = process.env.PORT ?? 3001

app.use(express.json())

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "synetr-api" })
})

app.get("/api", (_req, res) => {
  res.json({ message: "Synetr API" })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
