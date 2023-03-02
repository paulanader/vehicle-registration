import { Container } from "react-bootstrap";
import { ColorFooter, Signature } from "./styles";

const Footer: React.FC = () => {
  return (
    <ColorFooter className="mt-auto" data-testid="footer-container">
      <Container className="text-center">
        <Signature>
          <span className="me-1">site por</span>
          <span>
            <a
              href="https://www.linkedin.com/in/paulanader/"
              title="Perfil Linked - Paula Nader"
              className="text-white fw-bold"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-link"
            >
              Paula Nader
            </a>
          </span>
        </Signature>
      </Container>
    </ColorFooter>
  );
};

export default Footer;
