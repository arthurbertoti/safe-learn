import { useComponentVisible } from '../../hooks/useComponentVisible'
import {
  DivSelect,
  DropdownContainer,
  CustomSelect,
  OptionDropdown,
  OptionList,
  Label as LabelComponent,
} from './style'

export interface OptionsSelect {
  id?: number
  text: string
  value: string
}
export interface CustomSelectProps {
  id: string
  placeholder?: string
  inputArrow: boolean
  options: OptionsSelect[]
  data: string
  label?: string
  setData: (value: string) => void
  readOnly?: boolean
}

export function Select({
  id,
  placeholder,
  inputArrow,
  options,
  data,
  label,
  setData,
  readOnly = true,
}: CustomSelectProps) {
  const { isComponentVisible, setIsComponentVisible } =
    useComponentVisible<HTMLLabelElement>(false)
  const toggleDropdown = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <>
    
      <DivSelect>
      {label && <LabelComponent htmlFor={id}>{label}</LabelComponent>}
        <CustomSelect
          id={id}
          placeholder={placeholder}
          onClick={toggleDropdown}
          value={data}
          readOnly={readOnly}
        />
      </DivSelect>
      {isComponentVisible && (
        <DropdownContainer
          onMouseLeave={toggleDropdown}
        >
          <OptionList>
            {options.map((option) => (
              <OptionDropdown
                key={option.value}
                value={option.value}
                onClick={(evt: {
                  preventDefault: () => void
                  stopPropagation: () => void
                }) => {
                  evt.preventDefault()
                  evt.stopPropagation()
                  setData(option.value)
                  setIsComponentVisible(false)
                }}
              >
                {option.text}
              </OptionDropdown>
            ))}
          </OptionList>
        </DropdownContainer>
      )}
    </>
  )
}