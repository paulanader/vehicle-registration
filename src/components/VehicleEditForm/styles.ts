import { Form } from "react-bootstrap";
import styled from "styled-components";

export const InputArea = styled(Form.Control)`
  border: none;
  border-bottom: 1px solid var(--color-gray);
  border-radius: 0;

  &:focus {
    border: none;
    border-bottom: 1px solid var(--color-gray);
    border-radius: 0;
    box-shadow: none;
  }
`;

export const InputLabel = styled(Form.Label)`
  color: black;
`;
