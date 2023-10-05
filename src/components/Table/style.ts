import styled from 'styled-components'

export interface TableCellProps {
  width?: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: rgb(49, 49, 60);
  color: white;
  border-radius: 8px;
`

export const TableHeader = styled.thead`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgb(28, 28, 31);
  color: rgb(158, 158, 177);
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
  border-top: 1px solid rgb(28, 28, 31);
  border-bottom: 1px solid rgb(28, 28, 31);
  color: rgb(158, 158, 177);
  :hover {
    background-color: rgb(28, 28, 31);
  }
  :first-child {
    border-top: none;
  } 
  :last-child {
    border-bottom: none;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
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