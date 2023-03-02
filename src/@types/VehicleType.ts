import { FileType } from "./FileType";

export enum Rating {
  Excelente = "Excelente",
  Bom = "Bom",
  Ruim = "Ruim",
}

export type VehicleType = {
  brand: string;
  model: string;
  year: string;
  plate: string;
  rating?: Rating;
  images?: (File & FileType)[];
};
