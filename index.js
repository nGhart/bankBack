const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const { PORT, MONGO_URL } = process.env;
const app = express();

//cors package
app.use(
  cors({
    origin: [
      "*",
      "https://back-front.vercel.app",
      //"https://teller-zeta.vercel.app/"
    ],
    credentials: true,
  })
);

//app.use(cors());

//normal cors code
// app.use((req, res, next) => {
//   //specify origins
//   res.header("Access-Control-Allow-Origin", "*");
//   //specify methods
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT,PATCH, DELETE, OPTIONS"
//   );
//   //specify headers
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((d) => {
    console.log("connected to DB");
  });

//connectToDB();

app.use(cookieParser());

app.use(express.json());

const accountRoutes = require("./router/accountRoute");
const tellerRoutes = require("./router/tellerRoute");
const transactionRoute = require("./router/transactionRoute");
const authRoute = require("./router/authRoute");

//ROUTES
app.use("/account", accountRoutes);
app.use("/teller", tellerRoutes);
app.use("/transaction", transactionRoute);
app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
