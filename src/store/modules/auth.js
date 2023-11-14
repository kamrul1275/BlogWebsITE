import { jwtDecrypt } from "../../shared/jwtHelper";
import { tokenAlive } from "../../shared/jwtHelper";
import axios from "axios";


const state = () => ({
    authData: {
        token: "",
        refreshToken: "",
        tokenExp: "",
        userId: "",
        email: "",
    },
    loginStatus: "",
});

// const getters = {};

// const getters = {
//   getAuthData(state){
//     return state.authData;
//   }
// };




// const getters = {
//   // code hidden for display purpose
//   isTokenActive(state) {
//     if (!state.authData.tokenExp) {
//       return false;
//     }
//     return tokenAlive(state.authData.tokenExp);
//   },
// };





const getters = {
    getAuthData(state) {
        return state.authData;
    },
    isTokenActive(state) {
        if (!state.authData.tokenExp) {
            return false;
        }
        return tokenAlive(state.authData.tokenExp);
    },

    getLoginStatus(state) {
        return state.loginStatus;
    }
};
// end getter

// const actions = {};

const actions = {





    async login({ commit }, payload) {

        const response = await axios.post("http://127.0.0.1:8000/api/login", payload)
            .catch((err) => {
                console.log(err);
            });

            console.log('response', response.data);
        if (response.data.status == 'success') {
            commit("saveTokenData", response.data);
            commit("setLoginStatu", "success");
        } else {
            commit("setLoginStatu", "failed");
        }
    }

};





// end method

// const mutations = {};
const mutations = {
    saveTokenData(state, data) {
        console.log(data);
        localStorage.setItem("access_token", data.authorization.token);
        localStorage.setItem("refresh_token", data.authorization.token);

        const jwtDecodedValue = jwtDecrypt(data.authorization.token);
        const newTokenData = {
            token: data.authorization.token,
            refreshToken: data.authorization.token,
            tokenExp: jwtDecodedValue.exp,
            userId: jwtDecodedValue.sub,
            email: data.user.email,
        };
        state.authData = newTokenData;
    },

    setLoginStatu(state, value) {
        state.loginStatus = value;
    }
};
// end mutation




export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


