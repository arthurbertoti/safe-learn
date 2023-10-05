import styled from 'styled-components'
import { Themes } from '../../styles/Themes'

export const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  z-index: 5;
  cursor: pointer;
  background-color: ${Themes.white};
  border-radius: 20px;
  border: 1px solid gray;
`

export const DivSelect = styled.div`
  position: relative;
  display: flex;
`

export const CustomSelect = styled.input<{ isNewContent?: boolean }>`
  appearance: none;
  width: 100%;
  height: 30px;
  background-color: ${Themes.white};
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid ${Themes.blue};
  color: ${Themes.blue};
  font-size: 15px;
  outline: none;
  padding: 16px 32px;
`

export const SelectIcon = styled.img`
  position: absolute;
  cursor: pointer;
  width: 15px;
  right: 16px;
  top: 60%;
`

export const OptionList = styled.ul<{ isNewContent?: boolean }>`
  font-size: 15px;
  padding: 0;
  border: none;
  margin: 0;
  background-color: ${Themes.white};

  li:first-child {
    border-radius: 20px 20px 0 0;
  }

  li:last-child {
    border-radius: 0 0 20px 20px;
    border-bottom: none;
  }
`

export const OptionDropdown = styled.li`
  width: 100%;
  display: flex;
  background: gray;
  padding: 8px;
  text-align: initial;
  list-style: none;
  border-bottom: 1px solid ${Themes.blue};
  background-color: ${Themes.white};
  :hover {
    background-color: ${Themes.blue};
    color: ${Themes.white};
  }
`
