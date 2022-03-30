import * as yup from 'yup';

export const registValidSchema = yup.object().shape({
  email: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Поле email обязательно')
    .email('Некорректный email'),
  name: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Поле name обязательно'),
  password: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Поле password обязательно'),
});
