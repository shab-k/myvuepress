<template>
    <nav class="nav-wrapper transparent">
      <div class="container">
        <a href="#" class="sidenav-trigger" data-target="mobile-menu">
          <i class="fas fa-bars"></i>
        </a>
          <ul class="left hide-on-med-and-down">
            <li><router-link to="/" exact>About</router-link></li>
            <li><router-link to="/blog/" exact>Blog</router-link></li>
          </ul>
        <!-- Inside Hamburger Menu -->
        <ul class="sidenav grey lighten-2" id="mobile-menu">
          <li><router-link to="/" exact>About</router-link></li>
           <li><router-link to="/blog/" exact>Blog</router-link></li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
   
    }
  },
  mounted() {
    $(document).ready(function() {
        $(".sidenav").sidenav();
      })
  }
};
</script>

<style>
.router-link-active {
  background: #eee;
  color: #444;
}
nav ul a,
nav a {
  color: #000;
}
</style>

