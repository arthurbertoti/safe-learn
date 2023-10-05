import styled from 'styled-components'
import { Themes } from '../../styles/Themes'

export const DropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  z-index: 5;
  cursor: pointer;
  background: white;
  box-shadow: 0px 0px 20px rgba(139, 139, 139, 0.5);
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
  background: gray;
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid gray;
  color: blue;
  font-size: 15px;
  outline: none;
  display: block;
  margin-top: 20px;

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
  color: blue;
  font-size: 15px;

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
  padding: 18px;
  text-align: initial;
  list-style: none;
  border-bottom: 1px solid gray;

  :hover {
    color: white;
  }
`

export const ArrowImg = styled.img`
  width: 1rem;
  margin-left: 0.5rem;
`
