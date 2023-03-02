import * as Yup from "yup";
import { VehicleType } from "../@types/VehicleType";

export const validationSchema = Yup.object({
  brand: Yup.string().required("Campo obrigatório"),
  model: Yup.string().required("Campo obrigatório"),
  year: Yup.number()
    .required("Campo obrigatório")
    .integer("Informe um número inteiro")
    .min(1900, "Informe um ano válido")
    .max(new Date().getFullYear(), "Informe um ano válido"),
  plate: Yup.string()
    .test(
      "formPlate",
      "Deve conter 7 dígitos",
      (val) => String(val)?.length === 7
    )
    .matches(/^[A-Z]{1}/i, "Placa inválida")
    .required("A placa é obrigatória"),
});

export type SchemaType = {
  initialValues: VehicleType;
  onSubmit: (vehicle: VehicleType) => void;
};
