import express from "express";

export const app = express();
// default port to listen
const port = process.env.PORT || 8080;

app.use(express.json());

import './check-qr';
import './query';

// define a route handler for the default home page
app.get("/", (req, res) => {
  console.log("Displaying one of my favorite growth/learning quotes.");
  res.send(
    "Reading makes a full man, writing an exact man, and discourse a ready man - Francis Bacon"
  );
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`RapidPass handler ✔️ started at http://localhost:${port}`);
});
