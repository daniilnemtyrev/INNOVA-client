import * as yup from 'yup';
import { nameRegex } from '../regexp/regexp';

export const profileValidSchema = yup.object().shape({
  surname: yup.string().typeError('Должно быть строкой').matches(nameRegex),
  name: yup.string().typeError('Должно быть строкой').matches(nameRegex),
  patronymic: yup.string().typeError('Должно быть строкой').matches(nameRegex),
  birthdate: yup.string().typeError('Должно быть строкой'),
  phone: yup.string().typeError('Должно быть строкой'),
  move_to: yup.string().typeError('Должно быть строкой'),
  move_from: yup.string().typeError('Должно быть строкой'),
  post_status: yup.string().typeError('Должно быть строкой'),
  place_of_work_stud: yup.string().typeError('Должно быть строкой'),
});
