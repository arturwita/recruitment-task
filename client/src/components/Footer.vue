<template>
    <footer>
        <p id="git">
            Find me on
            <a href="https://github.com/arturwita" target="_blank">
                GitHub
            </a>
            .
        </p>

        <p id="copyrights">
            &copy; 2020r.
        </p>
    </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background-image: linear-gradient(to right, dimgray, lightslategray);
    }

    #copyrights {
        font-weight: bold;
    }

    a {
        color: #7CFF00;
        text-decoration: none;
        font-weight: bold;
    }
</style>
