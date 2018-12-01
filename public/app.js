/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

new Vue ({
    el: '#app',
    data: {
        loginUrl: '/api/users/login',
        username: '',
        password: '',
    },
    methods: {
        login: async function() {
            const { username, password } = this;
            const response = await axios({
                method: 'post',
                url: this.loginUrl,
                data: { username: username, password: password }
            });

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.user.token;
            console.log(axios.defaults.headers.common['Authorization']);
            const checkAuthResponse = await axios.get('/api/users/current');
            console.log(checkAuthResponse);
            // document.location.href = '../dashboard';
        }
    }

});