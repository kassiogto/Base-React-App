import { Props as SelectProps, OptionTypeBase } from 'react-select'

export interface ReactSelectOption<
  T extends string = string,
  U extends string = string,
> extends OptionTypeBase {
  value: T
  label: U
}

export interface ReactSelectProps
  extends SelectProps<ReactSelectOption, boolean> {}
