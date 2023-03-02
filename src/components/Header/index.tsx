import { Container } from "react-bootstrap";
import PillButton from "../PillButton";
import { ContainerHeader, Logo } from "./styles";

interface HeaderProps {
  route?: string;
  label?: string;
  hasButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, route, hasButton = false }) => (
  <ContainerHeader data-testid="header-container">
    <Container>
      <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
        <Logo className="fw-bold align-items-center" to="/">
          <h1 className="mb-0">Veículos</h1>
          <h2 className="mb-0">Cadastro</h2>
        </Logo>
        {hasButton && <PillButton label={label} route={route} type="button" />}
      </div>
    </Container>
  </ContainerHeader>
);

export default Header;
