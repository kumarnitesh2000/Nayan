const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");
port = 80;
let id = 0;
const config = {
  mongoURI:
    "mongodb+srv://johriabhishek123:THTqhtEH8CiJxSLj@cluster0.cjzg9ki.mongodb.net/?retryWrites=true&w=majority",
};
const cors = require("cors");
app.use(cors());
// place holder for the data
const events = require("./evm");
let mongoose = require("mongoose");

const fileUpload = require("express-fileupload");
connect()
  .then(() => {
    console.info("connected to mongo db");
  })
  .catch((err) => {
    console.error(`not connected to mongo db due to ${err}`);
  });

function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res, err) => {
        if (err) {
          console.log("not connected");
          return reject(err);
        }
        resolve(res);
      })
      .catch((err) => {
        console.error(`not connected to mongo db due to ${err}`);
      });
  });
}

app.use(
  fileUpload({
    limits: {
      fileSize: 10000000,
    },
    abortOnLimit: true,
  })
);
app.use(express.static("../upload"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.json());

app.get("/api/events", async (req, res) => {
  console.log("api/events called!");
  let r = await events.find({});
  res.json(r);
});

app.post("/api/event", async (req, res) => {
  const { image } = req.files;
  if (!image) return res.sendStatus(400);
  // console.info("save in "+path.join(__dirname,"..") + '/upload/' + image.name);
  // Move the uploaded image to our upload folder
  image.mv(path.join(__dirname, "..") + "/upload/" + image.name);
  const { event } = req.body;
  await events.create({ event, image: image.name, id: id + 1 });
  res.json("event addedd");
});

app.delete("/api/event", async (req, res) => {
  const { id } = req.body;

  await events.deleteOne({ _id: id });
  res.json("event deleted");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
