import axios from "axios";
import { API_URL } from "@/config";

class HttpRequest {
  getInsideConfig() {
    const config = {
      baseURL: API_URL,
      headers: {},
      method: "post", //  默认请求方式为post,其他方式需调request时另写
    };
    return config;
  }
  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        const { data, status } = res;
        if (status === 200) {
          if (data.code === 1 || data.status_code === 0) {
            return data;
          } else {
            if (data.msg || data.message) {
              // Toast.fail({
              //   message: data.msg || data.message,
              //   duration: 2000,
              // });
            }
            return data;
          }
        }
      },
      (error) => {
        let errorInfo = error.response;
        if (!errorInfo) {
          const {
            request: { statusText, status },
            config,
          } = JSON.parse(JSON.stringify(error));
          errorInfo = {
            statusText,
            status,
            request: {
              responseURL: config.url,
            },
          };
        }
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
  // 上传图片单独使用
  // upload() {
  //   const instance = axios.create({
  //     headers:{'Content-Type':'multipart/form-data'},
  //   })
  //   return instance;
  // }
}
export default HttpRequest;
