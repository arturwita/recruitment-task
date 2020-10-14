<template>
    <header>
        <router-link to="/">
            <h1>
                recruitment-task
            </h1>
        </router-link>
        <div id="buttons">
            <router-link to="/register" class="user-buttons">register</router-link>
            <router-link to="/login" class="user-buttons">login</router-link>
        </div>
    </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        padding: 30px;
        background-image: linear-gradient(to right, dimgray, lightslategray);
    }

    h1 {
        color: snow;
    }

    #buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: auto;
        margin-top: auto;
        width: 230px;
    }

    .user-buttons {
        width: 100px;
        font-size: 20px;
        text-align: center;
        text-decoration: none;
        background-color: snow;
        color: black;
        border-radius: 5px;
        border: 2px solid black;
    }
</style>
