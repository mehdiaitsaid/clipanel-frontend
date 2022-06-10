import router from "../router";
import Api from "./api.service";


export const authService = {

    login(user) {
        return Api
            .post('/auth/login', {
                email: user.email,
                password: user.password
            });
    },
    logout() {
        localStorage.removeItem('token');
        router.push({ name: "Sign In" });

    },
    getCurrentUser() {
        return Api.get( '/user', { headers: this.authHeader() });
    }

};