import styled from "styled-components";

export const ColorFooter = styled.footer`
  background-color: var(--color-blue);
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 576px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export const Signature = styled.div`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
