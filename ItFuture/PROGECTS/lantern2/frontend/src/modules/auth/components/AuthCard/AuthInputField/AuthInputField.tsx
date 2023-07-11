import { FC } from 'react';
import Input from '@/common/components/Input/Input';
import { FORM_FIELD } from '@/common/constants';
import { INPUT_FIELD } from '@/common/constants/inputField';

import styles from '@/modules/auth/components/AuthCard/AuthForm/AuthForm.module.scss';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IAuthFormData } from '@/modules/auth/components/AuthCard/AuthForm/AuthForm';

interface IAuthInputFieldProps {
  register: UseFormRegister<IAuthFormData>;
  errors: FieldErrors<IAuthFormData>;
  isSignup: boolean;
}

export const AuthInputField: FC<IAuthInputFieldProps> = ({
  register,
  errors,
  isSignup,
}) => {
  return (
    <>
      <div className={styles.inputFields}>
        <Input
          placeholder={FORM_FIELD.EMAIL}
          {...register(INPUT_FIELD.EMAIL)}
          errorMessage={errors?.email?.message}
        />
        <Input
          type={INPUT_FIELD.PASSWORD}
          placeholder={FORM_FIELD.PASSWORD}
          {...register(INPUT_FIELD.PASSWORD)}
          errorMessage={errors?.password?.message}
        />
        {isSignup ? (
          <>
            <Input
              type={INPUT_FIELD.PASSWORD}
              placeholder={FORM_FIELD.PASSWORD_CONFIRM}
              {...register(INPUT_FIELD.PASSWORD_CONFIRM)}
              errorMessage={errors?.passwordConfirm?.message}
            />
          </>
        ) : <div className={styles.underlay}></div>}
      </div>
    </>
  );
};
