<template>
    <div>
        <Header/>
        <form @submit.prevent="handleRegister">
            <label for="login">Login:</label><br>
            <input v-model="login" type="text" id="login" name="login" required value><br>
            <label for="password">Password: (min 5 characters)</label><br>
            <input v-model="password" type="password" id="password" name="password" required value><br>
            <input type="submit" value="Register">
        </form>
        <Footer/>
    </div>
</template>

<script>
  import Footer from "../components/Footer";
  import Header from "../components/Header";
  import { register } from "../api-calls";

  export default {
    name: "Register",
    components: {
      Header,
      Footer
    },
    data () {
      return {
        login: '',
        password: ''
      }
    },
    methods: {
      handleRegister: function () {
        const {login, password} = this;
        register({login, password})
          .then(msg => {
            alert(msg);
            this.$router.push('/')
          })
          .catch(() => {
            this.$router.push('/bad-request')
          })
      }
    }
  }
</script>

<style scoped>
    form {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    input[type=text],
    input[type=password] {
        width: 250px;
        height: 20px;
        background-color: snow;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
        margin: 5px 0 15px;
    }
</style>
