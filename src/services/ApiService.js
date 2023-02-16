/* eslint-disable prettier/prettier */
import VueAxios from "vue-axios";
import axios from "axios";
import TokenService from "./TokenService";
class ApiService {
    vueInstance;
    static init(app) {
        ApiService.vueInstance = app;
        ApiService.vueInstance.use(VueAxios, axios);
        ApiService.vueInstance.axios.defaults.baseURL = "http://localhost:8000/api/";
    }
    static setHeader() {
        ApiService.vueInstance.axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`;
        ApiService.vueInstance.axios.defaults.headers.common["Accept"] = "application/json";
    }
    static get (url) {
        return ApiService.vueInstance.axios.get(url);
    }
    static post (url, form) {
        return ApiService.vueInstance.axios.post(url, form);
    }
    static patch (url, form) {
        return ApiService.vueInstance.axios.patch(url, form);
    }
    static delete (url) {
        return ApiService.vueInstance.axios.delete(url);
    }
}

export default ApiService;