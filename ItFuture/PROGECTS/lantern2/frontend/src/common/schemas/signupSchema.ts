import * as yup from 'yup';
import { EMPTY_STRING } from '@/common/constants';
import { passwordShape } from '@/common/schemas/passwordShape';
import { emailShape } from '@/common/schemas/emailShape';

export const signupSchema = yup.object().shape({
  email: emailShape,
  password: passwordShape,
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), EMPTY_STRING], 'Паролі мають співпадати')
    .required('Поле "Підтвердження пароля" є обов\'язковим'),
});
