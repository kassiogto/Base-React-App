export interface AppTheme {
  id: string
  background: string
  snowLight: string
  snow: string
  snowDark: string
  primaryText: string
  secondaryText: string
  contrastPrimaryText: string
  contrastSecondaryText: string
  accent: string
  accentDark: string
  danger: string
  dangerDark: string
  warning: string
  success: string
  successDark: string
  border: string
  placeholder: string
  disabled: string
  hover: string
  contrastHover: string
  scrollBarThumb: string
  scrollBarTrack: string
}

export const LIGHT_THEME: AppTheme = {
  id: 'light',
  background: '#ffffff',
  snowLight: '#f7f7f7',
  snow: '#f2f2f2',
  snowDark: '#e7e7e7',
  primaryText: '#464646',
  secondaryText: '#737373',
  contrastPrimaryText: '#e6e6e6',
  contrastSecondaryText: '#c3c3c3',
  accent: '#32c77f',
  accentDark: '#2eb875',
  danger: '#ff6666',
  dangerDark: '#ff4d4d',
  warning: '#ffcd04',
  success: '#33cc33',
  successDark: '#2eb82e',
  border: '#d9d9d9',
  placeholder: 'rgba(0, 0, 0, 0.7)',
  disabled: '#cccccc',
  hover: 'rgba(0, 0, 0, 0.1)',
  contrastHover: 'rgba(255, 255, 255, 0.1)',
  scrollBarThumb: '#c4c4c4',
  scrollBarTrack: '#ffffff',
}
