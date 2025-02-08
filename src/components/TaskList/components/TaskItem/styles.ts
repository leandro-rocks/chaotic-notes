import { spacing } from "@styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
`;

export const TaskTitle = styled.input.attrs({
  type: "text",
})<{ finished: boolean }>`
  font: inherit;
  padding: 0;
  margin: 0;
  width: 100%;
  outline: none;
  border: none;

  ${({ finished }) =>
    finished &&
    `
        text-decoration: line-through;
    `}
`;
