import {
  Model,
  DataTypes,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyCountAssociationsMixin,
  Association,
} from "sequelize";
import sequelizeConnection from "../connection";

import Specialty from "./Specialty";

interface DoctorAttributes {
  id: number;
  nome: string;
  crm: string;
  telefone_fixo: string | null;
  telefone_celular: string;
  cep: string;
  rua: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default class Doctor extends Model implements DoctorAttributes {
  public id!: number;
  public nome!: string;
  public crm!: string;
  public telefone_fixo!: string | null;
  public telefone_celular!: string;
  public cep!: string;
  public rua!: string;
  public bairro!: string;
  public localidade!: string;
  public uf!: string;

  public created_at!: Date;
  public updated_at!: Date;

  getSpecialties!: BelongsToManyGetAssociationsMixin<Specialty>;
  addSpecialty!: BelongsToManyAddAssociationMixin<Specialty, number>;
  hasSpecialty!: BelongsToManyHasAssociationMixin<Specialty, number>;
  countSpecialties!: BelongsToManyCountAssociationsMixin;
  createSpecialties!: BelongsToManyCreateAssociationMixin<Specialty>;
  setSpecialities!: BelongsToManyAddAssociationMixin<Specialty, number>;

  public readonly specialties?: Specialty[];

  public static associations: {
    specialties: Association<Doctor, Specialty>;
  };

  public static associate() {
    Doctor.belongsToMany(Specialty, {
      through: {
        model: "doctor_specialty",
        unique: false,
      },
      as: "specialities",
      foreignKey: "doctor_id",
    });
  }
}

Doctor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    crm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone_fixo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone_celular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    localidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "doctor",
    timestamps: true,
    paranoid: true,
    deletedAt: "deletedAt",
  }
);
