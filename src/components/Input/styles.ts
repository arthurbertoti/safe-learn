import styled from 'styled-components'
import { Themes } from '../../styles/Themes'

interface ContainerProps {
  height?: string
  width?: string
}

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props: ContainerProps) => props.width || '100%'};
  height: ${(props: ContainerProps) => props.height || 'auto'};
`

export const Input = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 2px solid #e7e7e9;
  padding: 16px;
  font-size: 16px;
  color: ${Themes.blue};
  background: #e7e9ee;
  transition: border-color 0.2s;
  outline: none;
  &:focus {
    border-color: ${Themes.blue};
  }
`

export const Label = styled.label`
  font-size: 14px;
  color: ${Themes.blue};
  margin-bottom: 8px;
`