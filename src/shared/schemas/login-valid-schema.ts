import * as yup from 'yup';

export const loginValidSchema = yup.object().shape({
  email: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Поле-email-обязательно')
    .email('Некорректный email'),
  password: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Поле password обязательно')
    .min(8, 'Введите не менее 8 символов')
    .max(64, 'Максимум 64 символова'),
});
