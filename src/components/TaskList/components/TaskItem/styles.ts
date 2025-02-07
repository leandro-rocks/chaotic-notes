import { spacing } from "@styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
`;

export const TaskTitle = styled.span<{ finished: boolean }>`
  ${({ finished }) =>
    finished &&
    `
        text-decoration: line-through;
    `}
`;
