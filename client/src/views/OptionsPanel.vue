<template>
    <div>
        <Header/>
        <div class="wrapper">
            <input type="button" @click="handleDownload" value="download data">
            <input type="button" @click="handleShow" value="show data">
        </div>
        <Footer/>
    </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import {downloadTodos} from "../api-calls";

  export default {
    name: "OptionsPanel",
    components: {
      Footer,
      Header
    },
    methods: {
      handleDownload: function () {
        downloadTodos()
          .then(msg => {
            alert(msg)
          })
          .catch(err => {
            alert(err)
          })
      },
      handleShow: function () {
        this.$router.push('todos')
      },
    }
  }
</script>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        min-height: 530px;
        height: auto;
        margin: auto;
        background-image: linear-gradient(to right, #7CB700, #449900);
    }

    input[type=button] {
        display: flex;
        width: 280px;
        height: 100px;
        background-color: snow;
        color: black;
        font-size: 30px;
        text-transform: uppercase;
        align-items: center;
        justify-content: center;
        border: 0;
    }

    input[type=button]:hover {
        background-color: dimgray;
        color: snow;
    }
</style>
