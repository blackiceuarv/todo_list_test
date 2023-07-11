import * as yup from 'yup';

// TODO
export const passwordShape = yup
  .string()
  .required('Поле "Пароль" є обов\'язковим')
  .min(4, 'Пароль повинен містити щонайменше 4 символів')
  .max(20, 'Пароль повинен містити не більше 20 символів');
