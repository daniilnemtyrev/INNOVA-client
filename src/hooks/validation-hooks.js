import { useEffect, useState } from 'react';

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isUse, setUse] = useState(false);
  const valid = useValidation(value, validations)

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = e => {
    setUse(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isUse,
    ...valid
  };
};

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [isEmail, setEmail] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLengthError':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'isEmail':
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase()) ? setEmail(false) : setEmail(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if(isEmail || isEmpty || minLengthError){
      setInputValid(false)
    } else setInputValid(true)
  }, [isEmail, isEmpty, minLengthError])

  return {
    minLengthError,
    isEmpty,
    isEmail,
    inputValid
  };
};
