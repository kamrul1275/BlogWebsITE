<template>
    <div>
        <h4>Login Form</h4>

        test login
        <form @submit.prevent="login()">

            <div class="mb-3">
                <label for="txtuserName" class="form-label"> Name</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" v-model="username" />
            </div>

            <div class="mb-3">
                <label for="txtPassword" class="form-label">Password</label>
                <input type="password" class="form-control" v-model="password" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>


    </div>
</template>





<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'LoginVue',
    data() {
        return {
            username: 'asda',
            password: ''
        }
    },
    computed: {
        ...mapGetters('auth', {
            getterLoginStatus: 'getLoginStatus'
        })
    },
    methods: {
        ...mapActions('auth', {
            actionLogin: 'login'
        }),


        // async login(){
        //    await this.actionLogin({username:this.username, password:this.password});
        //    if(this.getterLoginStatus === 'success'){
        //      alert('login sucess');
        //    }else{
        //      alert('failed to login')
        //    }
        // }

        async login() {
            // console.log(this.username)
            await this.actionLogin({ userName: this.username, password: this.password });
            if (this.getterLoginStatus === 'success') {
                this.$router.push("/dashboard");
            } else {
                alert('failed to login')
            }
        }

    }
};
</script>