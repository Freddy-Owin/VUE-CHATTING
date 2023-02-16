/* eslint-disable prettier/prettier */
import { defineStore } from "pinia";
import TokenService from "../services/TokenService";
import ApiService from "../services/ApiService";
export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {},
      authenticated: {},
      error: {},
    }
  },
  actions : {
    setAuth(user) {
      this.user = user;
      this.authenticated = true;
    },
    setError(error) {
      this.error = error;
    },
    refuseAuth() {
      this.user = {};
      this.authenticated = false;
      TokenService.destroyToekn();
    },
    verifyAuth() {
      if(TokenService.getToken()) {
        ApiService.setHeader();
        ApiService.get("user").then(({data}) => {
          this.setAuth(data);
        }).catch(({res}) => {
          this.setError(res);
          this.refuseAuth();
        })
      } else {
        this.refuseAuth();
      }
    },
  }
});
