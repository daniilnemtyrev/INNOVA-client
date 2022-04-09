import * as yup from 'yup';
import { nameRegex } from '../regexp/regexp';

export const profileValidSchema = yup.object().shape({
  surname: yup
    .string()
    .typeError('Должно быть строкой')
    .matches(nameRegex)
    .required('Обязательное поле'),
  name: yup
    .string()
    .typeError('Должно быть строкой')
    .matches(nameRegex)
    .required('Обязательное поле'),
  patronymic: yup
    .string()
    .typeError('Должно быть строкой')
    .matches(nameRegex)
    .required('Обязательное поле'),
  birthdate: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  phone: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  move_to: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  move_from: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  post_status: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  place_of_work_stud: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
});
