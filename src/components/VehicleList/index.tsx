import { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { VehicleType } from "../../@types/VehicleType";
import PillButton from "../PillButton";
import Search from "../Search";
import TablePagination from "../TablePagination";

interface VehicleListProps {
  vehicles: VehicleType[];
  onDelete: (plate: string) => void;
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles, onDelete }) => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setCurrentPage(1);
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      vehicle.plate.toLowerCase().includes(searchValue.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const totalItems = filteredVehicles.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  const currentVehicles = filteredVehicles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ overflowY: "hidden" }} data-testid="vehicle-list-container">
      <Row sm={1} md={2} className="mb-5 justify-content-md-end">
        <Col>
          <Search
            searchValue={searchValue}
            handleSearchChange={handleSearchChange}
          />
        </Col>
      </Row>
      <Table hover>
        <thead>
          <tr>
            <th className="text-center">Marca</th>
            <th className="text-center">Modelo</th>
            <th className="text-center">Ano</th>
            <th className="text-center">Placa</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {currentVehicles.map((vehicle) => (
            <tr key={vehicle.plate}>
              <td className="text-center">{vehicle.brand}</td>
              <td className="text-center">{vehicle.model}</td>
              <td className="text-center">{vehicle.year}</td>
              <td className="text-center">{vehicle.plate}</td>
              <td className="d-flex gap-3 align-items-center justify-content-center">
                <PillButton
                  route={`/vehicles/${vehicle.plate}`}
                  label="Editar"
                />
                <PillButton
                  handleClick={() => onDelete(vehicle.plate)}
                  type={"button"}
                  color="orange"
                  label="Excluir"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default VehicleList;
