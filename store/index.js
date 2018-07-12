import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        userid: "",
        username: "",
        userpic: "",
        userphone: "",
        isLoaded: false,
        houseDetails: null,
        currentHouseIndex: 0
    },
    mutations: {
        setUserData(state,userData) {
            state.userid = userData.userid;
            state.username = userData.username;
            state.userpic = userData.userpic;
            state.userphone = userData.userphone;
        },
        setHouseDetails(state,data) {
            state.houseDetails = data;
        },
        setCurrentHouse(state,data) {
            state.currentHouseIndex = data
        }
    }
})

export default store;

