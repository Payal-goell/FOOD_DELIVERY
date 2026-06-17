import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
  /* await mongoose.connect(process.env.MONGO_URL, {
      dbName: "food-del",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e)); */
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log(e));
    // .then(() => console.log("Database Connected"))
};
