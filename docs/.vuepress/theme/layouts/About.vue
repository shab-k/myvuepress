<template>
  <div class="container">
    <div id="about">
      <div class="row">
        <div class="col s12 l12">
          <div class="card">
            <div class="card-content single-post">
             <h4>{{ $page.frontmatter.title }}</h4>
              <article>{{ $page.frontmatter.text }}</article>
               <Content/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default {
  components: { Nav, Footer },
  name: "About"
};
</script>

<style>
#about{
margin: 70px 0px;
}
.card.single-post {
  padding: 60px;
}
p{
  color:#000;
}
</style>