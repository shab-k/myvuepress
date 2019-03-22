<template>
  <!-- single view -->
  <div class="container">
    <div id="singleBlog">
      <div class="row">
        <div class="col s12 l12">
          <div class="card">
            <div class="card-content single-post">
             <h4>{{ $page.title }}</h4>
              <p class="date">{{ formateDate($page.frontmatter.date) }}</p>
              <article>{{ $page.text }}</article>
               <Content/>
               <a href="http://localhost:8080/blog/"><i class="fas fa-arrow-left"></i> Back to posts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default {
  components: { Nav, Footer },
  name: "PostLayout",
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
  },
  methods: {
    formateDate(date) {
      return moment(date).add(24, 'hours').format("MMM Do YYYY");
    }
  }
};
</script>

<style>
#singleBlog{
margin: 70px 0px;
}
</style>