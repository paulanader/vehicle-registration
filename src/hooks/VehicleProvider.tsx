/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { createContext, useContext, useMemo, useState } from "react";
import { VehicleType } from "../@types/VehicleType";

interface IVehicleContextProp {
  vehicle: VehicleType | null;
  vehicles: VehicleType[] | [];
  isLoading: boolean;
  getVehicle: (vehicle: VehicleType) => void;
  editVehicle: (plate: string, vehicle: VehicleType) => void;
  deleteVehicle: (plate: string) => void;
  setVehicle: React.Dispatch<React.SetStateAction<VehicleType | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setVehicles: React.Dispatch<React.SetStateAction<VehicleType[] | []>>;
}

interface IVehicleProviderProps {
  children: React.ReactNode;
}

export const VehicleContext = createContext<IVehicleContextProp>(
  {} as IVehicleContextProp
);

export const useVehicle = (): IVehicleContextProp => {
  const context = useContext(VehicleContext);

  if (!context) {
    throw new Error("useVehicle must be within VehicleProvider");
  }

  return context;
};

export const VehicleProvider: React.FC<IVehicleProviderProps> = ({
  children,
}) => {
  const [vehicle, setVehicle] = useState<VehicleType | null>(null);
  const [vehicles, setVehicles] = useState<VehicleType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getVehicle = (vehicle: VehicleType) => {
    const newVehicle = { ...vehicle };
    const updatedVehicles = [...vehicles, newVehicle];
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
  };

  const editVehicle = (plate: string, vehicle: VehicleType) => {
    const updatedVehicles = vehicles.map((v) =>
      v.plate === plate ? vehicle : v
    );
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
  };

  const deleteVehicle = (plate: string) => {
    const updatedVehicles = vehicles.filter(
      (vehicle) => vehicle.plate !== plate
    );
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
  };

  useEffect(() => {
    const storedVehicles = localStorage.getItem("vehicles");
    if (storedVehicles) {
      setVehicles(JSON.parse(storedVehicles));
    }
  }, [setVehicles]);

  const providerValue = useMemo(
    () => ({
      vehicle,
      vehicles,
      isLoading,
      getVehicle,
      editVehicle,
      deleteVehicle,
      setVehicle,
      setIsLoading,
      setVehicles,
    }),
    [
      vehicle,
      vehicles,
      isLoading,
      getVehicle,
      editVehicle,
      deleteVehicle,
      setVehicle,
      setIsLoading,
      setVehicles,
    ]
  );

  return (
    <VehicleContext.Provider value={providerValue}>
      {children}
    </VehicleContext.Provider>
  );
};
