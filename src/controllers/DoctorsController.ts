import { Request, Response } from "express";
const yup = require("yup");

import getLocation from "../utils/getLocation";
import Doctor from "../database/models/Doctor";
import Specialty from "../database/models/Specialty";

export default {
  async insert(req: Request, res: Response) {
    const bodySchema = yup.object().shape({
      nome: yup.string().required().max(120),
      crm: yup.string().required().min(7).max(7),
      telefoneFixo: yup.number(),
      telefoneCelular: yup.number().required(),
      cep: yup.string().required().min(8).max(8),
      especialidadesId: yup.array().required().min(2),
    });

    if (!(await bodySchema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: true, message: "Validation failed!" });
    }

    const {
      cep,
      nome,
      crm,
      telefoneFixo,
      telefoneCelular,
      especialidadesId,
    } = req.body;

    const doctorCrmFind = await Doctor.findAll({
      where: {
        crm,
        telefone_celular: telefoneCelular,
      },
    });

    if (doctorCrmFind.length > 0) {
      return res.status(400).json({
        error: true,
        message: "Crm or cellphone already exist",
      });
    }

    const { logradouro: rua, bairro, localidade, uf } = await getLocation(cep);

    try {
      const doctorData = await Doctor.create({
        cep,
        crm,
        telefone_fixo: telefoneFixo,
        telefone_celular: telefoneCelular,
        nome,
        rua,
        bairro,
        localidade,
        uf,
      });
      doctorData.setSpecialities(especialidadesId);
    } catch (err) {
      console.log(err);
      return res.status(500).end();
    }
    return res.status(201).end();
  },

  async update(req: Request, res: Response) {
    const bodySchema = yup.object().shape({
      nome: yup.string().max(120),
      crm: yup.string().min(7).max(7),
      telefoneFixo: yup.number(),
      telefoneCelular: yup.number(),
      cep: yup.string().min(8).max(8),
      especialidadesId: yup.array().min(2),
    });

    if (!(await bodySchema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: true, message: "Validation failed!" });
    }

    const { id } = req.params;
    const { ...data } = req.body;

    const doctorCrmFind = await Doctor.findAll({
      where: {
        crm: data.crm,
        telefone_celular: data.telefoneCelular,
      },
    });

    if (doctorCrmFind.length > 0) {
      return res.status(400).json({
        error: true,
        message: "Crm or cellphone already exist",
      });
    }

    const doctorId = await Doctor.findAll({
      where: {
        id,
      },
    });
    if (doctorId.length == 0) {
      return res.status(404).json({
        error: true,
        message: "Doctor not exist",
      });
    }

    try {
      await Doctor.update({ ...data }, { where: { id } });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: true,
        message: "Ocurred a problem",
      });
    }

    return res.status(201).end();
  },
  async select(req: Request, res: Response) {
    const { ...data } = req.query;

    const doctors = await Doctor.findAll({
      where: {
        ...data,
      },
      include: [
        {
          model: Specialty,
          as: "specialities",
        },
      ],
    });

    return res.status(201).json(doctors);
  },
  async softDelete(req: Request, res: Response) {
    const { id } = req.params;

    const doctorId = await Doctor.findAll({
      where: {
        id,
      },
    });
    if (doctorId.length == 0) {
      return res.status(404).json({
        error: true,
        message: "Doctor do no exist",
      });
    }
    await Doctor.destroy({
      where: {
        id,
      },
    });
    return res.status(201).end();
  },
};
