import * as yup from 'yup';

export const loginValidSchema = yup.object().shape({
  email: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Поле email обязательно')
    .email('Некорректный email'),
  password: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Поле password обязательно'),
});
