import { FC } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NotificationContent } from '@/common/components/NotificationContent';
import { authJwtCreate, authUsersCreate } from '@/common/api/services/auth';
import { NOTIFICATION_TYPES, useNotification } from '@/common/hooks';
import { signupSchema, loginSchema } from '@/common/schemas';
import { AuthSocial } from '@/modules/auth/components/AuthCard/AuthSocial/AuthSocial';
import { AuthInputField } from '@/modules/auth/components/AuthCard/AuthInputField/AuthInputField';
import {
  AUTH_MESSAGES,
  AUTH_STATUS,
  EMPTY_STRING,
  INPUT_FIELD,
} from '@/common/constants';

import styles from './AuthForm.module.scss';

export interface IAuthFormData {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface IAuthForm {
  authVariant: Record<string, string>;
  status: AUTH_STATUS;
  onClose: () => void;
  handleChangeStatus: () => void;
}

export const AuthForm: FC<IAuthForm> = ({
  authVariant: { title, buttonTitle, buttonLabel, subTitle },
  status,
  handleChangeStatus,
  onClose,
}) => {
  const notify = useNotification();
  const { push } = useRouter();
  const handleRedirect = () => {
    push('/');
    onClose();
  };
  const isSignup = status === AUTH_STATUS.SignUp;

  const mutation = useMutation(isSignup ? authUsersCreate : authJwtCreate);

  const formMethods = useForm<IAuthFormData>({
    defaultValues: {
      [INPUT_FIELD.EMAIL]: EMPTY_STRING,
      [INPUT_FIELD.PASSWORD]: EMPTY_STRING,
      ...(isSignup ? { [INPUT_FIELD.PASSWORD_CONFIRM]: EMPTY_STRING } : {}),
    },
    mode: 'onSubmit',
    resolver: yupResolver(isSignup ? signupSchema : loginSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = formMethods;

  const handleFormSwitch = () => {
    handleChangeStatus();
    reset();
  };

  const onSubmit = async (data: IAuthFormData) => {
    try {
      const res = await mutation.mutateAsync(data, {
        onSuccess: (data, variables, context) => {
          notify(
            <NotificationContent
              title={'Успіх'}
              body={
                isSignup ? AUTH_MESSAGES.RegistrationSuccess : AUTH_MESSAGES.LoginSuccess
              }
            />,
            NOTIFICATION_TYPES.Success,
          );
          isSignup ? handleFormSwitch() : handleRedirect();
        },
        onError: (error, variables, context) => {
          notify(
            <NotificationContent
              title={'Помилка'}
              body={isSignup ? AUTH_MESSAGES.RegistrationError : AUTH_MESSAGES.LoginError}
            />,
            NOTIFICATION_TYPES.Error,
          );
        },
      });
      // TODO
      console.log('->  res', res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.title}>{title}</p>
      <AuthInputField {...{ register, errors, isSignup }} />
      <AuthSocial
        {...{
          buttonTitle,
          subTitle,
          buttonLabel,
          handleFormSwitch,
        }}
      />
    </form>
  );
};
