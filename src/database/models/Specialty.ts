import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyHasAssociationMixin,
  Association,
  BelongsToManyCountAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  Optional,
} from "sequelize";
import sequelizeConnection from "../connection";

import Doctor from "./Doctor";

interface SpecialtyAttributes {
  id: number;
  nome: string;
}

class Specialty extends Model implements SpecialtyAttributes {
  public id!: number;
  public nome!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;

  public getDoctors!: BelongsToManyGetAssociationsMixin<Doctor>;
  public addDoctor!: BelongsToManyAddAssociationMixin<Doctor, number>;
  public hasDoctor!: BelongsToManyHasAssociationMixin<Doctor, number>;
  public countDoctors!: BelongsToManyCountAssociationsMixin;
  public createDoctors!: BelongsToManyCreateAssociationMixin<Doctor>;

  public readonly doctors?: Doctor[];

  public static associations: {
    doctors: Association<Specialty, Doctor>;
  };

  public static associate() {
    Specialty.belongsToMany(Doctor, {
      through: {
        model: "doctor_specialty",
        unique: false,
      },
      as: "doctors",
      foreignKey: "specialty_id",
    });
  }
}

Specialty.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "specialty",
    timestamps: true,
    paranoid: true,
  }
);

export default Specialty;
