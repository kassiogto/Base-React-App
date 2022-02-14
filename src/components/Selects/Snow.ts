import styled from 'styled-components'
import Select, { Theme } from 'react-select'

import { ReactSelectProps } from './types'

export const SnowSelect = styled(Select).attrs(({ theme }) => {
  return {
    classNamePrefix: 'react-select',
    styledTheme: theme,
    theme(selectTheme: Theme) {
      return {
        ...selectTheme,
        colors: {
          ...selectTheme.colors,

          primary: theme.snowDark,
          primary75: theme.snow,
          primary50: theme.snow,
          primary25: theme.snow,

          danger: theme.dangerDark,
          dangerLight: theme.danger,

          neutral0: selectTheme.colors.neutral0,
          neutral5: theme.primaryText,
          neutral10: theme.primaryText,
          neutral20: theme.primaryText,
          neutral30: theme.primaryText,
          neutral40: theme.primaryText,
          neutral50: theme.primaryText,
          neutral60: theme.primaryText,
          neutral70: theme.primaryText,
          neutral80: theme.primaryText,
          neutral90: theme.primaryText,
        },
      }
    },
  }
})<ReactSelectProps>`
  .react-select-container {
  }

  .react-select__control {
    min-height: 4.8rem;

    border: none;
    border-radius: 1rem;
    background-color: ${(props) => props.styledTheme.snow};
  }

  .react-select__value-container {
    padding: 0 1.6rem;
    overflow: visible;
  }

  .react-select__indicators {
    .react-select__indicator {
      color: rgba(0, 0, 0, 0.3);
    }

    .react-select__indicator-separator {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  .react-select__menu {
    border-radius: 1rem;
    overflow: hidden;
  }

  .react-select__menu-list {
  }

  .react-select__option {
  }

  .react-select__option--is-selected {
    background-color: ${(props) => props.styledTheme.snowDark};
    color: ${(props) => props.styledTheme.primaryText};
    font-weight: 900;
  }

  .react-select__multi-value {
    background-color: ${(props) => props.styledTheme.snowDark};
    color: ${(props) => props.styledTheme.primaryText};

    overflow: hidden;
    border-radius: 1rem;

    .react-select__multi-value__label {
      color: ${(props) => props.styledTheme.primaryText};
    }

    .react-select__multi-value__remove {
      color: ${(props) => props.styledTheme.danger};
      padding: 0.4rem 0.6rem;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.styledTheme.danger};
        color: white;
      }
    }
  }
` as React.FC<ReactSelectProps>
