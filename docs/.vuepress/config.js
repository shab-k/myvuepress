module.exports = {
  themeConfig: {
    nav: [
      { text: 'About', link: '/' },
      { text: 'AllPosts', link: '/blog/' },
    ]
  },
  // plugins: ["vuepress-plugin-reading-time"],
  head: [
    // link to materialize
    ['link', { rel: 'stylesheet', href: `https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css` }],
    ['script', { src: `https://code.jquery.com/jquery-3.3.1.min.js` }],
    ['script', { src: `https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js` }],
    // font awesome
    ['link', { rel: 'stylesheet', href: `https://use.fontawesome.com/releases/v5.7.1/css/all.css`, integrity:`sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr`, crossorigin:`anonymous` }],
    ['script', { defer: ``, src: `https://use.fontawesome.com/releases/v5.7.2/js/all.js`, integrity:`sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP`, crossorigin:`anonymous` }]

  ]
}  
