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
        width: 350,
        minHeight: 40,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: error && touched ? colors.red[0] : colors.blue[1],
        borderStyle: 'solid',
        fontSize: 14,
      };
    },
    option: (styles: any) => ({
      ...styles,
      fontSize: 14,
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
