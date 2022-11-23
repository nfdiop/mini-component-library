import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const visibleSelect = (
    <VisibleSelect>
      <div>{displayedValue}</div>
      <Icon id="chevron-down" size={16} />
    </VisibleSelect>
  );
  const invisibleSelect = (
    <FunctionalSelect value={value} onChange={onChange}>
      {children}
    </FunctionalSelect>
  );
  return (
    <SelectWrapper>
      {invisibleSelect}
      {visibleSelect}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
`;

const VisibleSelect = styled.div`
  padding: 12px;
  display: flex;
  gap: 24px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  border-radius: 8px;

  &::hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline: 2px solid -webkit-focus-ring-color;
  }
`;

const FunctionalSelect = styled.select`
  padding: 12px;
  padding-right: 48px;
  position: absolute;
  opacity: 0;
`;

export default Select;
