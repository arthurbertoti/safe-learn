import styled from 'styled-components'
import { Themes } from '../../styles/Themes'

export interface TableCellProps {
  width?: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${Themes.white};
  border: 1px solid ${Themes.blue};
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`

export const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: ${Themes.white};
  border-radius: 8px;
`

export const TableHeader = styled.thead`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid ${Themes.blue};
  border-bottom: 1px solid ${Themes.blue};
  color: ${Themes.blue};
  font-weight: 800 !important;
`

export const TableHeaderRow = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid ${Themes.blue};
  border-bottom: 1px solid ${Themes.blue};
  color: ${Themes.blue};
  font-weight: 800 !important;
  :last-child {
    border-bottom: none;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`

export const TableHeaderCell = styled.th<TableCellProps>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  text-align: center;
  justify-content: center;
  width: ${props => props.width}%;
`

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid ${Themes.blue};
  border-bottom: 1px solid ${Themes.blue};
  color: ${Themes.blue};
  :hover {
    background-color: ${Themes.blue};
    color: ${Themes.white};
  }
  :last-child {
    border-bottom: none;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  td:last-child {
    align-items: self-start;
  }
`

export const TableCell = styled.td<TableCellProps>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  text-align: center;
  justify-content: center;
  width: ${props => props.width}%;
  :last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  padding-top: 12px;
  width: 100%;
  justify-content: center;
  input {
    background-color: ${Themes.white};
    border: 1px solid ${Themes.blue};
    border-radius: 12px;
    color: ${Themes.blue};
    font-size: 15px;
    outline: none;
    padding: 16px 32px;
  }
`