<template>
    <div class="middle-content">
        <p id="info">
            Sorry, I don't know how to frontend <br />
            <span id="emoji">
                &#128579;
            </span>
        </p>
    </div>
</template>

<script>
  export default {
    name: "HowToFrontend"
  }
</script>

<style scoped>
    .middle-content {
        min-height: 530px;
        height: auto;
        background-image: linear-gradient(to right, #7CB700, #449900);
        display: flex;
        flex-direction: column;
    }

    #info {
        font-size: 50px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 120px;
    }

    #emoji {
        font-size: 150px;
    }
</style>
