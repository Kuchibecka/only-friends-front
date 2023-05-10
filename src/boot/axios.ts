import { boot } from 'quasar/wrappers';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
//todo: edit baseURL
const baseURL = 'http:/localhost:8080/api';

export const axiosConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL,
};

const $api = axios.create(axiosConfig);

$api.interceptors.request.use((config) => {
  const timeout = 10000;
  if (
    config.headers &&
    !config.url?.startsWith('/health') &&
    !config.url?.startsWith('/signup') &&
    !config.url?.startsWith('/login')
    // !config.url?.startsWith('/password/forget') &&
    // !config.url?.startsWith('/password/reset')
  )
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'access_token'
    )}`;

  config.headers['ngrok-skip-browser-warning'] = 'skip-browser-warning';
  config.timeout = timeout;

  return config;
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = $api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { $api };
