import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: var(--color-orange);
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: white;

  h1 {
    font-size: 1.7rem;
    font-weight: 900;
  }

  h2 {
    font-size: 0.9rem;
  }

  &:hover {
    text-decoration: none;
    color: white;
  }

  &::after {
    content: "";
    position: relative;
    top: -50px;
    right: -110px;
    display: block;
    width: 7px;
    height: 7px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: white;
  }
`;
