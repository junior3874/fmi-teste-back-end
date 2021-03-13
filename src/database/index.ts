import sequelizeConnection from "./connection";
import Specialty from "./models/Specialty";
import Doctor from "./models/Doctor";

const models = [Doctor, Specialty];

for (let model of models) {
  model.associate();
}

export default sequelizeConnection;
