<template>
    <div>
        <MyHeader/>
        <HowToFrontend/>
        <Footer/>
    </div>
</template>

<script>
  import MyHeader from '../components/Header'
  import Footer from '../components/Footer'
  import HowToFrontend from '../components/HowToFrontend'

  export default {
    name: "Home",
    components: {
      MyHeader,
      HowToFrontend,
      Footer,
    }
  }
</script>

<style scoped>

</style>
