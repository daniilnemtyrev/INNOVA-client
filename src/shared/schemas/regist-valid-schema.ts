import * as yup from 'yup';
import { englishRegex, nameRegex } from '../regexp/regexp';

export const registValidSchema = yup.object().shape({
  email: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле')
    .email('Некорректный email'),
  surname: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле')
    .matches(nameRegex),
  name: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле')
    .matches(nameRegex),
  patronymic: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле')
    .matches(nameRegex),
  birthdate: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  password: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле')
    .min(8, 'Введите не менее 8 символов')
    .max(64, 'Максимум 64 символова'),
});
