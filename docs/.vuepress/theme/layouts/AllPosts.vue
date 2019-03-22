<template>
  <div class="container posts-container">
    <div id="showBlogs">
      <input class="placeholder" type="text" v-model="search" placeholder="Search Post Titles">
      <div v-for="post in filteredPosts" :key="post.frontmatter.date">
      <div class="row">
          <div class="col s12 l12">
            <div class="card">
              <div class="card-content truncate">
                <span class="card-title"><h5>{{ post.title }}</h5></span>
                <p class="date">{{ formateDate(post.frontmatter.date) }}</p>
                <!-- {{ post.excerpt }} -->
                <p>{{ post.frontmatter.description }}</p>
              </div>
              <div class="card-action">
                <router-link :to="post.path">
                  <a href>Read More</a>
                </router-link>
              </div>
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
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: { Nav, Header, Footer },
  name: "AllPosts",
  data(){
    return {
      search: ''
    }
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    },
    filteredPosts(){
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
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
#showBlogs {
  max-width: 800px;
  margin: 0px auto;
}
.card .card-content {
  margin-right: 20px;
  padding: 12px;
}
span {
  color: #ac0f0f;
  text-transform: capitalize;
}
.card {
  margin: 0.1rem 0 1rem 0;
}
.card .card-action {
    padding: 16px 24px 16px 14px;
}
.card-action a {
  font-weight:200;
  font-weight: bold;
}
h4{
  font-weight: 600;
}
.date{
  font-weight: bold;
  text-transform: capitalize;
}
.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {
    color: #e73636;
}
input[type=text]:not(.browser-default) {
  margin-bottom: 30px;
  
}
.placeholder {
  color: #000;
}
</style>