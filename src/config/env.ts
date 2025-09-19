import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGO_URI){
  throw new Error("Missing MONGO_URI")
}

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo:process.env.MONGO_URI
};

export default config;
