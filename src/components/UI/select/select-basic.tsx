/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import Select, { GroupBase, StylesConfig } from 'react-select';
import { colors } from '../../../styles/colors/colors';

interface Props {
  value?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  name?: string;
  options: any;
  error?: string;
}

export const SelectBase = ({
  value,
  onChange,
  name,
  placeholder,
  options,
  error,
}: Props) => {
  const [touched, setTouched] = useState(false);

  const styles: StylesConfig<string, false, GroupBase<string>> = {
    control: (styles: any, { isFocused }) => {
      if (!touched) {
        setTouched(isFocused);
      }
      return {
        ...styles,

        marginBottom: 26,
        maxHeight: 40,
        borderRadius: 0,
        borderWidth: 1,
        borderColor: error && touched ? colors.red[0] : colors.blue[1],
        borderStyle: 'none',
        fontSize: 12,
        background: 'transparent',
        borderBottom: `1px solid ${colors.grey[5]}`,
        color: colors.white[0],
        fontFamily: 'Montserrat',
      };
    },
    option: (styles: any) => ({
      ...styles,
      top: 0,
      marginTop: -5,
      marginBottom: -6,
      color: colors.white[0],
      borderStyle: 'none',
      background: colors.grey[6],
      backgroundColor: colors.grey[6],
      fontFamily: 'Montserrat',
      fontSize: 12,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      marginLeft: -5,
      color: colors.white[0],
    }),
    menu: (styles: any) => ({
      ...styles,
      top: 30,
      overflow: 'hidden',
    }),
    placeholder: (styles: any) => ({
      ...styles,
      padding: 0,
    }),
  };

  return (
    <Select
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      options={options}
      styles={styles}
    />
  );
};
