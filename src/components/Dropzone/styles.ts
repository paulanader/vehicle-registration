import styled, { css } from "styled-components";

export const dragActive = css`
  border-color: var(--color-blue);
  color: var(--color-blue);
`;

export const dragReject = css`
  border-color: var(--color-orange);
  color: var(--color-orange);
`;

export const notDragActive = css`
  border-color: var(--color-blue);
  color: var(--color-blue);
`;

export const DropContainer = styled.div`
  border: 1px dashed var(--color-gray);
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;
`;

export const List = styled.ul`
  margin-top: 20px;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-gray);

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: var(--color-gray);
      margin-top: 5px;

      button {
        border: 0;
        background-color: transparent;
        color: var(--color-orange);
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  border-radius: 5px;
  margin-right: 10px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
`;
