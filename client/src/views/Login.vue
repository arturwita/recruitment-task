<template>
    <div>
        <Header/>
        <form @submit.prevent="handleLogin">
            <label for="login">Login:</label><br>
            <input v-model="login" type="text" id="login" name="login" required value><br>
            <label for="password">Password:</label><br>
            <input v-model="password" type="password" id="password" name="password" required value><br>
            <input type="submit" value="Login">
        </form>
        <Footer/>
    </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import { logIn } from '../api-calls';

  export default {
    name: "Login",
    data() {
      return {
        login: '',
        password: '',
      }
    },
    components: {
      Footer,
      Header,
    },
    methods: {
      handleLogin: function () {
        const {login, password} = this;
        logIn({login, password})
          .then(() => {
            this.$router.push('/options-panel')
          })
          .catch(() => {
            this.$router.push('/unauthorized')
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
