import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path: path.join((proces.cwd() ,'.env' ))})

export default{
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL
}