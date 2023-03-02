import { act, renderHook } from "@testing-library/react";
import { ReactNode } from "react";
import { mockedVehicles } from "../mocks/mocks";
import { useVehicle, VehicleProvider } from "./VehicleProvider";

const wrapper = ({ children }: { children: ReactNode }) => (
  <VehicleProvider>{children}</VehicleProvider>
);

describe("VehicleProvider", () => {
  it("should show the initial values", () => {
    const { result } = renderHook(() => useVehicle(), { wrapper });

    expect(result.current.vehicle).toBe(null);
    expect(result.current.vehicles).toStrictEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.deleteVehicle).toBeDefined();
    expect(result.current.editVehicle).toBeDefined();
    expect(result.current.getVehicle).toBeDefined();
    expect(result.current.setIsLoading).toBeDefined();
    expect(result.current.setVehicle).toBeDefined();
    expect(result.current.setVehicles).toBeDefined();
  });

  it("should add vehicles value when call the getVehicle function", () => {
    const { result } = renderHook(() => useVehicle(), { wrapper });

    act(() => result.current.getVehicle(mockedVehicles[0]));

    expect(result.current.vehicles).toStrictEqual([mockedVehicles[0]]);
  });

  it("should change vehicles value when call the getVehicle function", () => {
    const { result } = renderHook(() => useVehicle(), { wrapper });

    act(() =>
      result.current.editVehicle(mockedVehicles[1].plate, mockedVehicles[1])
    );

    expect(result.current.vehicles).toStrictEqual([mockedVehicles[0]]);
  });

  it("should delete vehicle", () => {
    const { result } = renderHook(() => useVehicle(), { wrapper });

    act(() => result.current.getVehicle(mockedVehicles[0]));
    act(() => result.current.deleteVehicle(mockedVehicles[0].plate));

    expect(result.current.vehicles).toStrictEqual([]);
  });
});
