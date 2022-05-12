import * as yup from 'yup';
import { nameRegex } from '../regexp/regexp';

export const projectValidSchema = yup.object().shape({
  name: yup
    .string()
    .typeError('Должно быть строкой')
    .matches(nameRegex)
    .required('Обязательное поле'),
  description: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  auditorium: yup
    .string()
    .typeError('Должно быть строкой')
    .matches(nameRegex)
    .required('Обязательное поле'),
  prototype: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  economy: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  marketing: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
});
