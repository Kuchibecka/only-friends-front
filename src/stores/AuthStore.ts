import {defineStore} from "pinia";
import {SimpleState} from "src/global/types/State";
import {ref} from "vue";
import {LoginData} from "src/model/loginData/LoginData";
import {AuthService} from "src/service/AuthService";
import {SignupData} from "src/model/loginData";

export const logoutFunc = () => {
  useAuthStore().logout();
}

export const useAuthStore = defineStore('authStore', () => {
  // const dialogStore = useDialogStore(); // todo: ???

  let isAuth = !!localStorage.getItem('access_token');  //todo: ??? зачем "!!"?
  const state = ref<SimpleState>('unset');

  const checkAuth = () => localStorage.getItem('access_token') && isAuth; //todo: ???

  const login = async (data: LoginData) => {
    const res = await AuthService.login(data);
    if ('error' in res) {
      isAuth = false;
    } else {
      localStorage.setItem('access_token', res.token);
      const meRes = await AuthService.me();
      localStorage.setItem('user_id', meRes.id);
      localStorage.setItem('email', meRes.email);
      localStorage.setItem('nickname', meRes.nickname);
      localStorage.setItem('profile_picture', meRes.profile_picture);
      isAuth = true;
    }

    return res;
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    isAuth = false;
    return true;
  };

  const signup = async (creds: SignupData) => {
    const res = await AuthService.signup(creds);
    isAuth = !('error' in res);
    localStorage.setItem('access_token', res.token);
    localStorage.setItem('user_id', res.id);

    return res;
  };

  return {
    isAuth,
    state,
    checkAuth,
    login,
    logout,
    signup,
  }
});
