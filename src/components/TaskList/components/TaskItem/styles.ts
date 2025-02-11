import { spacing } from "@styles";
import styled from "styled-components";

export const Wrapper = styled.div<{ level: number }>`
  display: flex;
  flex-direction: column;

  margin-left: ${({ level }) => `calc(${level} * ${spacing.medium})`};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
`;

export const SubTaskList = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: ${spacing.medium};
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
