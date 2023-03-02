import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonContainer = styled(Button)`
  background-color: var(--color-blue);
  border: none;
  border-radius: 50px;
  padding: 6px 15px 6px 15px;
  color: white;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  border: none;
  border-radius: 50px;
  padding: 6px 15px 6px 15px;
  color: white;
`;
