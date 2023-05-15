import {$api} from "boot/axios";
import {LoginData, SignupData} from "src/model/loginData";

export interface LoginResponse {
  token: string
}

export interface SignupResponse {
  token: string,
  status: string,   //todo: как предусмотреть ответ с ошибкой о занятом нике? так?
  message: string
}

export interface MeResponse {
  email: string,
  nickname: string,
  id: string,
  profile_picture: string | null //todo: ???
}

export const AuthService = {
  async login(creds: LoginData) {
    try {
      const {data} = await $api.post<LoginResponse>('/login', creds);

      return data;
    } catch (e: unknown) {
      return {error: e};
    }
  },

  async me() {
    try {
      const {data} = await $api.get<MeResponse>('/me');

      return data;
    } catch (e: unknown) {
      return {error: e};
    }
  },

  async signup(creds: SignupData) {
    try {
      console.log('__________________:', $api.defaults.baseURL)
      const {data} = await $api.post<SignupResponse>('/signup', creds);

      return data;
    } catch (e: unknown) {
      return {error: e};
    }
  },
};
