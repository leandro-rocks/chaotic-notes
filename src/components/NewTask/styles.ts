import { colors, spacing } from "@styles";
import styled from "styled-components";

export const Container = styled.div<{ level: number }>`
  display: flex;
  gap: ${spacing.xsmall};

  margin-left: ${({ level }) => `calc(${level} * ${spacing.medium})`};
`;

export const NewTaskField = styled.input`
  font: inherit;
  padding: 0;
  margin: 0;
  width: 100%;
  outline: none;
  border: none;

  &::placeholder {
    color: ${colors.neutral.light};
  }
`;
