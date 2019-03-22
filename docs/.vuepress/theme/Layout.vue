<template>
  <div class="theme-container">
    <Nav />
    <Header />
    <!-- <Content /> -->
     <component class="main-content" :is="layout"></component>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllPosts from "./layouts/AllPosts";
import PostLayout from "./layouts/PostLayout";
import About from "./layouts/About";
export default {
  components: { Nav, Header, Footer, AllPosts, PostLayout, About },
  name: "Layout",
  computed: {
        layout() {
        return this.$page.frontmatter.layout 
        }
  }
};
</script>

<style>
   @import './styles/style.css';
</style>

