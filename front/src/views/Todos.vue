<template>
    <div class="middle-content">
        <Header/>

        <div v-if="todos.length === 0">
            <p>You need to download data first</p>
            <router-link to="/options-panel">Go back to options panel</router-link>
        </div>
        <table v-else>
            <thead>
            <tr>
                <th>mongo id</th>
                <th>todo id</th>
                <th>title</th>
                <th>completed</th>
            </tr>
            </thead>

            <tbody v-for="todo in todos" :key="todo.id">
            <tr>
                <td>{{todo.id}}</td>
                <td>{{todo.todoId}}</td>
                <td>{{todo.title}}</td>
                <td>{{todo.completed}}</td>
            </tr>
            </tbody>
        </table>
        <Footer/>
    </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import {getTodos} from '../api-calls';

  export default {
    name: "Todos",
    components: {Footer, Header},
    data() {
      return {
        todos: [],
      }
    },
    mounted() {
      getTodos()
        .then(res => {
          this.todos = res;
        })
        .catch(err => {
          alert(err)
        });
    }
  }
</script>

<style scoped>
    .middle-content {
        height: auto;
        background-image: linear-gradient(to right, #7CB700, #449900);
        display: flex;
        flex-direction: column;
    }

    table {
        margin: 50px auto;
        width: 70vw;
        border-collapse: collapse;
    }

    thead {
        background-color: dimgray;
    }

    th, td {
        border-bottom: 1px solid black;
    }

    tbody {
        background-color: lightslategray;
    }

    tr {
        text-align: center;
        vertical-align: center;
        height: 30px;
    }

    tr:hover {
        background-color: dimgray;
    }

    th {
        width: 25%;
        height: 40px;
        text-transform: uppercase;
    }
</style>
