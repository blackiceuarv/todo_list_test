import * as yup from 'yup';

export const emailShape = yup
  .string()
  .email('Некоректна адреса електронної пошти')
  .required('Поле "Email" є обов\'язковим');
