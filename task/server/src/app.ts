import express from "express"


const app = express()


const PORT = process.env.PORT || 4000;

const start: () => Promise<void> = async () => {
//   await connectDB(process.env.CONNECTION_STRING!);
  try {
    app.listen(PORT, () => {
      console.log(`Listening to your server on port ${PORT} 😎🥰 `);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();