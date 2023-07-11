export enum AUTH_STATUS {
  SignUp = 'signUp',
  LogIn = 'logIn',
}

export const logIn = {
  title: 'Вхід',
  buttonTitle: 'Увійти',
  buttonLabel: 'Реєстрація',
  subTitle: 'Змінити пароль',
};

export const signUp = {
  title: 'Реєстрація',
  buttonTitle: 'Зареєструватись',
  buttonLabel: 'Вхід',
  subTitle: 'Вже маєте акаунт?',
};

export const authVariant = {
  [AUTH_STATUS.SignUp]: signUp,
  [AUTH_STATUS.LogIn]: logIn,
};
