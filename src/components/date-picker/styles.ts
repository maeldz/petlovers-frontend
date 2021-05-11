import styled from 'styled-components'
import DatePickerBase from 'react-datepicker'

export const Picker = styled(DatePickerBase)`
  background: #e9e9e9;
  color: #6f6f6f;
  width: 271px;
  height: 43px;
  border-radius: 6px;
  padding: 0 11px;

  .react-datepicker__day--selected {
    background: #f2ac05;
  }
`
