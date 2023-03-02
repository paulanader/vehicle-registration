import { Container } from "react-bootstrap";
import { Rating } from "../../@types/VehicleType";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VehicleForm from "../../components/VehicleListForm";
import { Wrapper } from "../../components/Wrapper";
import { useVehicle } from "../../hooks/VehicleProvider";

const VehicleRegistrationPage: React.FC = () => {
  const { getVehicle } = useVehicle();

  return (
    <Wrapper>
      <Header />
      <main>
        <Container>
          <BreadCrumb route="/" title="Cadastro" />
          <VehicleForm
            initialValues={{
              brand: "",
              model: "",
              year: "",
              plate: "",
              rating: Rating.Excelente,
            }}
            onSubmit={getVehicle}
          />
        </Container>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default VehicleRegistrationPage;
