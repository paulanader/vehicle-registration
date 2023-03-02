import { Container } from "react-bootstrap";
import Banner from "../../components/Banner";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VehicleList from "../../components/VehicleList";
import { Wrapper } from "../../components/Wrapper";
import { useVehicle } from "../../hooks/VehicleProvider";

const VehiclePage = () => {
  const { vehicles, deleteVehicle } = useVehicle();

  return (
    <Wrapper>
      <Header hasButton label="Novo veículo" route={"/vehicles/add"} />
      <main>
        {vehicles.length === 0 && <Banner label="Novo veículo" />}
        {vehicles.length > 0 && (
          <Container>
            <BreadCrumb title="Veículos Cadastrados" />
            <VehicleList vehicles={vehicles} onDelete={deleteVehicle} />
          </Container>
        )}
      </main>
      <Footer />
    </Wrapper>
  );
};

export default VehiclePage;
