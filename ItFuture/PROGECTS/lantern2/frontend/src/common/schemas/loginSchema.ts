import * as yup from 'yup';
import { emailShape } from '@/common/schemas/emailShape';
import { passwordShape } from '@/common/schemas/passwordShape';

export const loginSchema = yup.object().shape({
  email: emailShape,
  password: passwordShape,
});
