import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

const app = express()
const { PORT } = process.env;

app.use(express.json({ limit:'50kb' }));
app.use([
  morgan('dev'),
  cors({
    origin:'*'
  }),
  helmet()
])

app.listen(PORT,()=>{
  console.log(`Server on ready url : http://localhost:${PORT}`)
})