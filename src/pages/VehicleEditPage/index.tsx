import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VehicleEditForm from "../../components/VehicleEditForm";
import { Wrapper } from "../../components/Wrapper";
import { useVehicle } from "../../hooks/VehicleProvider";

const VehicleEditPage = () => {
  const { vehicles, editVehicle } = useVehicle();
  const { id } = useParams();

  const vehicle = vehicles.find((v) => v.plate === id);

  return (
    <Wrapper>
      <Header label="Editar" />
      <main>
        <Container>
          <BreadCrumb route="/" title="Edição" />
          {vehicle && (
            <VehicleEditForm vehicle={vehicle} onSubmit={editVehicle} />
          )}
        </Container>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default VehicleEditPage;
