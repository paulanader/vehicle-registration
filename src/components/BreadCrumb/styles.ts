import { Link } from "react-router-dom";
import styled from "styled-components";

export const ArrowLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray);
  transition: transform 300ms;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`;

export const ItemsLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray);
  font-size: 0.8rem;
  transition: transform 300ms;

  &:hover {
    text-decoration: none;
    color: var(--color-gray);
    filter: brightness(0.9);
    font-size: 0.9rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.7rem;
`;
