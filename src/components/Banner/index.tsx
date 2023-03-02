import { Container } from "react-bootstrap";
import PillButton from "../PillButton";

interface BannerProps {
  label: string;
}

const Banner: React.FC<BannerProps> = ({ label }) => (
  <Container className="text-center mt-5" data-testid="banner-container">
    <h1 className="text-dark mb-4">Faça o cadastro do veículo</h1>
    <PillButton label={label} route="/vehicles/add" type="button" />
  </Container>
);

export default Banner;
