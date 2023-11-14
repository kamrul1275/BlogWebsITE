<template>
    <div>
        <h1>Dashboard Page</h1>
        <div>
            UserName -- {{ gettersAuthData.email }}
        </div>
        <div>
            Id  -- {{gettersAuthData.userId}}


          
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "DashboardvUE",
    data() {
        return {
            email: '',
            password: '',
          
        }
    },
    mounted(){
        console.log(this.email);
    },
    computed: {

        user:function(){

          
            return {
                gettersAuthData:'getAuthData',
                
            };
            
        },
       
        ...mapGetters('auth', {
            
            gettersAuthData: 'getAuthData',


        }),
//       

    
    }
}
</script>