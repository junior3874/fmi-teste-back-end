import app from "./server";
import "./database";
import Specialty from "./database/models/Specialty";

import Doctor from "./database/models/Doctor";
import getLocation from "./utils/getLocation";

app.listen(3007, () => {
  console.log("app is running");
});
