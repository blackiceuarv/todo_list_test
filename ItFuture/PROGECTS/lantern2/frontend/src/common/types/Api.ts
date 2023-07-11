/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface TokenObtainPair {
  /**
   * Email
   * @minLength 1
   */
  email: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
}

export interface TokenRefresh {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
  /** Access */
  access?: string;
}

export interface TokenVerify {
  /**
   * Token
   * @minLength 1
   */
  token: string;
}

export interface User {
  /** ID */
  id?: number;
  /**
   * Email
   * Email користувача
   * @format email
   * @minLength 1
   */
  email?: string;
}

export interface UserCreate {
  /**
   * Email
   * Email користувача
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /** ID */
  id?: number;
  /**
   * Password
   * @minLength 1
   */
  password: string;
}

export interface Activation {
  /**
   * Uid
   * @minLength 1
   */
  uid: string;
  /**
   * Token
   * @minLength 1
   */
  token: string;
}

export interface SendEmailReset {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface UsernameResetConfirm {
  /**
   * Email
   * Email користувача
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  new_email: string;
}

export interface PasswordResetConfirm {
  /**
   * Uid
   * @minLength 1
   */
  uid: string;
  /**
   * Token
   * @minLength 1
   */
  token: string;
  /**
   * New password
   * @minLength 1
   */
  new_password: string;
}

export interface SetUsername {
  /**
   * Current password
   * @minLength 1
   */
  current_password: string;
  /**
   * Email
   * Email користувача
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  new_email: string;
}

export interface SetPassword {
  /**
   * New password
   * @minLength 1
   */
  new_password: string;
  /**
   * Current password
   * @minLength 1
   */
  current_password: string;
}

export interface UserSmall {
  /** ID */
  id?: number;
  /**
   * Last name
   * Прізвище користувача
   * @maxLength 24
   */
  last_name?: string;
  /**
   * First name
   * Ім'я користувача
   * @maxLength 24
   */
  first_name?: string;
  /**
   * Email
   * Email користувача
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Phone
   * Номер телефону користувача
   * @maxLength 20
   */
  phone?: string | null;
  /**
   * Avatar
   * Аватар користувача (розмір до 20 МБ, формат JPEG або PNG)
   * @format uri
   */
  avatar?: string | null;
}

export interface Booking {
  /** ID */
  id?: number;
  user?: UserSmall;
  /**
   * Status
   * Відмітка про прибуття
   */
  status?: boolean | null;
}

export interface Event {
  /** ID */
  id?: number;
  /**
   * Name
   * Назва події
   * @minLength 1
   */
  name: string;
  /**
   * Description
   * Опис події
   */
  description?: string | null;
  /**
   * Логотип події
   * Логотип події (jpg, jpeg, png)
   * @format uri
   */
  image?: string | null;
  /**
   * Постер події
   * Постер події (jpg, jpeg, png)
   * @format uri
   */
  poster?: string | null;
  /**
   * Charity
   * Відмітка про благодійність
   */
  charity?: boolean | null;
  /**
   * Start time
   * Час початку події
   * @format date-time
   */
  start_time?: string | null;
  /**
   * Price
   * Ціна події (від 0 до 9999), якщо вхід вільний залишити пусте поле
   * @min 0
   * @max 9999
   */
  price?: number | null;
  /**
   * Location
   * Адреса проведення події
   * @maxLength 255
   */
  location?: string | null;
  /**
   * Address
   * Місце проведення події
   * @maxLength 255
   */
  address?: string | null;
  /**
   * Genre
   * Жанр події
   * @maxLength 255
   */
  genre?: string | null;
  /** Booking count */
  booking_count?: string;
  /**
   * Slug
   * @format slug
   * @minLength 1
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug?: string;
}

export interface Performer {
  /** ID */
  id?: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /**
   * Slug
   * @format slug
   * @minLength 1
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug?: string;
  /**
   * Logo
   * Зображення виконавця
   * @format uri
   */
  logo?: string;
  /**
   * Poster
   * Постер виконавця
   * @format uri
   */
  poster?: string | null;
  /**
   * Description
   * Опис виконавця
   */
  description?: string | null;
  /**
   * Bank to support
   * Посилання на підтримку виконавця
   * @format uri
   * @maxLength 200
   */
  bank_to_support?: string;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
  /**
   * Website
   * Посилання на веб-сайт виконавця
   * @format uri
   * @maxLength 200
   */
  website?: string;
  /**
   * Telegram
   * Посилання на Telegram
   * @format uri
   * @maxLength 200
   */
  telegram?: string | null;
  /**
   * Instagram
   * Посилання на Instagram
   * @format uri
   * @maxLength 200
   */
  instagram?: string | null;
  /**
   * Youtube
   * Посилання на YouTube
   * @format uri
   * @maxLength 200
   */
  youtube?: string | null;
  /**
   * Tiktok
   * Посилання на TikTok
   * @format uri
   * @maxLength 200
   */
  tiktok?: string | null;
}

export type AuthJwtCreateCreateData = TokenObtainPair;

export type AuthJwtRefreshCreateData = TokenRefresh;

export type AuthJwtVerifyCreateData = TokenVerify;

export type AuthUsersListData = User[];

export type AuthUsersCreateData = UserCreate;

export type AuthUsersActivationData = Activation;

export type AuthUsersMeReadData = User[];

export type AuthUsersMeUpdateData = User;

export type AuthUsersMePartialUpdateData = User;

export type AuthUsersMeDeleteData = any;

export type AuthUsersResendActivationData = SendEmailReset;

export type AuthUsersResetUsernameData = SendEmailReset;

export type AuthUsersResetUsernameConfirmData = UsernameResetConfirm;

export type AuthUsersResetPasswordData = SendEmailReset;

export type AuthUsersResetPasswordConfirmData = PasswordResetConfirm;

export type AuthUsersSetUsernameData = SetUsername;

export type AuthUsersSetPasswordData = SetPassword;

export type AuthUsersReadData = User;

export type AuthUsersUpdateData = User;

export type AuthUsersPartialUpdateData = User;

export type AuthUsersDeleteData = any;

export type AuthVerifyCreateData = TokenVerify;

export type BookingsListData = Booking[];

export type BookingsCreateData = Booking;

export type BookingsReadData = Booking;

export type BookingsUpdateData = Booking;

export type BookingsPartialUpdateData = Booking;

export type BookingsDeleteData = any;

export type EventsListData = Event[];

export type EventsCreateData = Event;

export type EventsReadData = Event;

export type EventsUpdateData = Event;

export type EventsPartialUpdateData = Event;

export type EventsDeleteData = any;

export type EventsUsersData = Event;

export interface FeedbackCreateData {
  /** Ім'я */
  name: string;
  /** Електронна пошта */
  email: string;
  /** Повідомлення */
  message: string;
}

export type PerformersListData = Performer[];

export type PerformersCreateData = Performer;

export type PerformersReadData = Performer;

export type PerformersUpdateData = Performer;

export type PerformersPartialUpdateData = Performer;

export type PerformersDeleteData = any;

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || 'https://api.lantern.com.ua',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Lanter
 * @version v1
 * @license BSD License
 * @termsOfService https:/lanter.com/
 * @baseUrl https://api.lantern.com.ua
 *
 * Lanter
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     *
     * @tags auth
     * @name AuthJwtCreateCreate
     * @request POST:/auth/jwt/create/
     * @secure
     * @response `201` `AuthJwtCreateCreateData`
     */
    authJwtCreateCreate: (data: TokenObtainPair, params: RequestParams = {}) =>
      this.request<AuthJwtCreateCreateData, any>({
        path: `/auth/jwt/create/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     *
     * @tags auth
     * @name AuthJwtRefreshCreate
     * @request POST:/auth/jwt/refresh/
     * @secure
     * @response `201` `AuthJwtRefreshCreateData`
     */
    authJwtRefreshCreate: (data: TokenRefresh, params: RequestParams = {}) =>
      this.request<AuthJwtRefreshCreateData, any>({
        path: `/auth/jwt/refresh/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Takes a token and indicates if it is valid.  This view provides no information about a token's fitness for a particular use.
     *
     * @tags auth
     * @name AuthJwtVerifyCreate
     * @request POST:/auth/jwt/verify/
     * @secure
     * @response `201` `AuthJwtVerifyCreateData`
     */
    authJwtVerifyCreate: (data: TokenVerify, params: RequestParams = {}) =>
      this.request<AuthJwtVerifyCreateData, any>({
        path: `/auth/jwt/verify/`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersList
     * @request GET:/auth/users/
     * @secure
     * @response `200` `AuthUsersListData`
     */
    authUsersList: (params: RequestParams = {}) =>
      this.request<AuthUsersListData, any>({
        path: `/auth/users/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersCreate
     * @request POST:/auth/users/
     * @secure
     * @response `201` `AuthUsersCreateData`
     */
    authUsersCreate: (data: UserCreate, params: RequestParams = {}) =>
      this.request<AuthUsersCreateData, any>({
        path: `/auth/users/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersActivation
     * @request POST:/auth/users/activation/
     * @secure
     * @response `201` `AuthUsersActivationData`
     */
    authUsersActivation: (data: Activation, params: RequestParams = {}) =>
      this.request<AuthUsersActivationData, any>({
        path: `/auth/users/activation/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersMeRead
     * @request GET:/auth/users/me/
     * @secure
     * @response `200` `AuthUsersMeReadData`
     */
    authUsersMeRead: (params: RequestParams = {}) =>
      this.request<AuthUsersMeReadData, any>({
        path: `/auth/users/me/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersMeUpdate
     * @request PUT:/auth/users/me/
     * @secure
     * @response `200` `AuthUsersMeUpdateData`
     */
    authUsersMeUpdate: (data: User, params: RequestParams = {}) =>
      this.request<AuthUsersMeUpdateData, any>({
        path: `/auth/users/me/`,
        method: 'PUT',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersMePartialUpdate
     * @request PATCH:/auth/users/me/
     * @secure
     * @response `200` `AuthUsersMePartialUpdateData`
     */
    authUsersMePartialUpdate: (data: User, params: RequestParams = {}) =>
      this.request<AuthUsersMePartialUpdateData, any>({
        path: `/auth/users/me/`,
        method: 'PATCH',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersMeDelete
     * @request DELETE:/auth/users/me/
     * @secure
     * @response `204` `AuthUsersMeDeleteData`
     */
    authUsersMeDelete: (params: RequestParams = {}) =>
      this.request<AuthUsersMeDeleteData, any>({
        path: `/auth/users/me/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResendActivation
     * @request POST:/auth/users/resend_activation/
     * @secure
     * @response `201` `AuthUsersResendActivationData`
     */
    authUsersResendActivation: (data: SendEmailReset, params: RequestParams = {}) =>
      this.request<AuthUsersResendActivationData, any>({
        path: `/auth/users/resend_activation/`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResetUsername
     * @request POST:/auth/users/reset_email/
     * @secure
     * @response `201` `AuthUsersResetUsernameData`
     */
    authUsersResetUsername: (data: SendEmailReset, params: RequestParams = {}) =>
      this.request<AuthUsersResetUsernameData, any>({
        path: `/auth/users/reset_email/`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResetUsernameConfirm
     * @request POST:/auth/users/reset_email_confirm/
     * @secure
     * @response `201` `AuthUsersResetUsernameConfirmData`
     */
    authUsersResetUsernameConfirm: (
      data: UsernameResetConfirm,
      params: RequestParams = {},
    ) =>
      this.request<AuthUsersResetUsernameConfirmData, any>({
        path: `/auth/users/reset_email_confirm/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResetPassword
     * @request POST:/auth/users/reset_password/
     * @secure
     * @response `201` `AuthUsersResetPasswordData`
     */
    authUsersResetPassword: (data: SendEmailReset, params: RequestParams = {}) =>
      this.request<AuthUsersResetPasswordData, any>({
        path: `/auth/users/reset_password/`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResetPasswordConfirm
     * @request POST:/auth/users/reset_password_confirm/
     * @secure
     * @response `201` `AuthUsersResetPasswordConfirmData`
     */
    authUsersResetPasswordConfirm: (
      data: PasswordResetConfirm,
      params: RequestParams = {},
    ) =>
      this.request<AuthUsersResetPasswordConfirmData, any>({
        path: `/auth/users/reset_password_confirm/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersSetUsername
     * @request POST:/auth/users/set_email/
     * @secure
     * @response `201` `AuthUsersSetUsernameData`
     */
    authUsersSetUsername: (data: SetUsername, params: RequestParams = {}) =>
      this.request<AuthUsersSetUsernameData, any>({
        path: `/auth/users/set_email/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersSetPassword
     * @request POST:/auth/users/set_password/
     * @secure
     * @response `201` `AuthUsersSetPasswordData`
     */
    authUsersSetPassword: (data: SetPassword, params: RequestParams = {}) =>
      this.request<AuthUsersSetPasswordData, any>({
        path: `/auth/users/set_password/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersRead
     * @request GET:/auth/users/{id}/
     * @secure
     * @response `200` `AuthUsersReadData`
     */
    authUsersRead: (id: number, params: RequestParams = {}) =>
      this.request<AuthUsersReadData, any>({
        path: `/auth/users/${id}/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersUpdate
     * @request PUT:/auth/users/{id}/
     * @secure
     * @response `200` `AuthUsersUpdateData`
     */
    authUsersUpdate: (id: number, data: User, params: RequestParams = {}) =>
      this.request<AuthUsersUpdateData, any>({
        path: `/auth/users/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersPartialUpdate
     * @request PATCH:/auth/users/{id}/
     * @secure
     * @response `200` `AuthUsersPartialUpdateData`
     */
    authUsersPartialUpdate: (id: number, data: User, params: RequestParams = {}) =>
      this.request<AuthUsersPartialUpdateData, any>({
        path: `/auth/users/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersDelete
     * @request DELETE:/auth/users/{id}/
     * @secure
     * @response `204` `AuthUsersDeleteData`
     */
    authUsersDelete: (id: number, params: RequestParams = {}) =>
      this.request<AuthUsersDeleteData, any>({
        path: `/auth/users/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Takes a token and indicates if it is valid.  This view provides no information about a token's fitness for a particular use.
     *
     * @tags auth
     * @name AuthVerifyCreate
     * @request POST:/auth/verify/
     * @secure
     * @response `201` `AuthVerifyCreateData`
     */
    authVerifyCreate: (data: TokenVerify, params: RequestParams = {}) =>
      this.request<AuthVerifyCreateData, any>({
        path: `/auth/verify/`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),
  };
  bookings = {
    /**
     * No description
     *
     * @tags bookings
     * @name BookingsList
     * @request GET:/bookings/
     * @secure
     * @response `200` `BookingsListData`
     */
    bookingsList: (
      query?: {
        event?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BookingsListData, any>({
        path: `/bookings/`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bookings
     * @name BookingsCreate
     * @request POST:/bookings/
     * @secure
     * @response `201` `BookingsCreateData`
     */
    bookingsCreate: (data: Booking, params: RequestParams = {}) =>
      this.request<BookingsCreateData, any>({
        path: `/bookings/`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bookings
     * @name BookingsRead
     * @request GET:/bookings/{id}/
     * @secure
     * @response `200` `BookingsReadData`
     */
    bookingsRead: (id: number, params: RequestParams = {}) =>
      this.request<BookingsReadData, any>({
        path: `/bookings/${id}/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bookings
     * @name BookingsUpdate
     * @request PUT:/bookings/{id}/
     * @secure
     * @response `200` `BookingsUpdateData`
     */
    bookingsUpdate: (id: number, data: Booking, params: RequestParams = {}) =>
      this.request<BookingsUpdateData, any>({
        path: `/bookings/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bookings
     * @name BookingsPartialUpdate
     * @request PATCH:/bookings/{id}/
     * @secure
     * @response `200` `BookingsPartialUpdateData`
     */
    bookingsPartialUpdate: (id: number, data: Booking, params: RequestParams = {}) =>
      this.request<BookingsPartialUpdateData, any>({
        path: `/bookings/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bookings
     * @name BookingsDelete
     * @request DELETE:/bookings/{id}/
     * @secure
     * @response `204` `BookingsDeleteData`
     */
    bookingsDelete: (id: number, params: RequestParams = {}) =>
      this.request<BookingsDeleteData, any>({
        path: `/bookings/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  events = {
    /**
     * No description
     *
     * @tags events
     * @name EventsList
     * @request GET:/events/
     * @secure
     * @response `200` `EventsListData`
     */
    eventsList: (params: RequestParams = {}) =>
      this.request<EventsListData, any>({
        path: `/events/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name EventsCreate
     * @request POST:/events/
     * @secure
     * @response `201` `EventsCreateData`
     */
    eventsCreate: (data: Event, params: RequestParams = {}) =>
      this.request<EventsCreateData, any>({
        path: `/events/`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name EventsRead
     * @request GET:/events/{slug}/
     * @secure
     * @response `200` `EventsReadData`
     */
    eventsRead: (slug: string, params: RequestParams = {}) =>
      this.request<EventsReadData, any>({
        path: `/events/${slug}/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name EventsUpdate
     * @request PUT:/events/{slug}/
     * @secure
     * @response `200` `EventsUpdateData`
     */
    eventsUpdate: (slug: string, data: Event, params: RequestParams = {}) =>
      this.request<EventsUpdateData, any>({
        path: `/events/${slug}/`,
        method: 'PUT',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name EventsPartialUpdate
     * @request PATCH:/events/{slug}/
     * @secure
     * @response `200` `EventsPartialUpdateData`
     */
    eventsPartialUpdate: (slug: string, data: Event, params: RequestParams = {}) =>
      this.request<EventsPartialUpdateData, any>({
        path: `/events/${slug}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name EventsDelete
     * @request DELETE:/events/{slug}/
     * @secure
     * @response `204` `EventsDeleteData`
     */
    eventsDelete: (slug: string, params: RequestParams = {}) =>
      this.request<EventsDeleteData, any>({
        path: `/events/${slug}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags events
     * @name EventsUsers
     * @request GET:/events/{slug}/users/
     * @secure
     * @response `200` `EventsUsersData`
     */
    eventsUsers: (slug: string, params: RequestParams = {}) =>
      this.request<EventsUsersData, any>({
        path: `/events/${slug}/users/`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  feedback = {
    /**
     * No description
     *
     * @tags feedback
     * @name FeedbackCreate
     * @request POST:/feedback/
     * @secure
     * @response `201` `FeedbackCreateData`
     */
    feedbackCreate: (
      data: {
        /** Ім'я */
        name: string;
        /** Електронна пошта */
        email: string;
        /** Повідомлення */
        message: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FeedbackCreateData, any>({
        path: `/feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  performers = {
    /**
     * No description
     *
     * @tags performers
     * @name PerformersList
     * @request GET:/performers/
     * @secure
     * @response `200` `PerformersListData`
     */
    performersList: (params: RequestParams = {}) =>
      this.request<PerformersListData, any>({
        path: `/performers/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags performers
     * @name PerformersCreate
     * @request POST:/performers/
     * @secure
     * @response `201` `PerformersCreateData`
     */
    performersCreate: (data: Performer, params: RequestParams = {}) =>
      this.request<PerformersCreateData, any>({
        path: `/performers/`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags performers
     * @name PerformersRead
     * @request GET:/performers/{id}/
     * @secure
     * @response `200` `PerformersReadData`
     */
    performersRead: (id: number, params: RequestParams = {}) =>
      this.request<PerformersReadData, any>({
        path: `/performers/${id}/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags performers
     * @name PerformersUpdate
     * @request PUT:/performers/{id}/
     * @secure
     * @response `200` `PerformersUpdateData`
     */
    performersUpdate: (id: number, data: Performer, params: RequestParams = {}) =>
      this.request<PerformersUpdateData, any>({
        path: `/performers/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags performers
     * @name PerformersPartialUpdate
     * @request PATCH:/performers/{id}/
     * @secure
     * @response `200` `PerformersPartialUpdateData`
     */
    performersPartialUpdate: (id: number, data: Performer, params: RequestParams = {}) =>
      this.request<PerformersPartialUpdateData, any>({
        path: `/performers/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags performers
     * @name PerformersDelete
     * @request DELETE:/performers/{id}/
     * @secure
     * @response `204` `PerformersDeleteData`
     */
    performersDelete: (id: number, params: RequestParams = {}) =>
      this.request<PerformersDeleteData, any>({
        path: `/performers/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
}
