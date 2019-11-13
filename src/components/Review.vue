<template>
  <div class="review-list">
    <div class="review" v-for="review in this.reviews" v-bind:key="review.id">
      <!-- <p v-if="movie.id === review.movie_id">{{ review.username }},<br>{{ review.rate }},<br>{{ review.comment }}</p> -->
        const 
        <div class="inner-movies" v-for="movie in this.movies" v-bind:key="movie.id">
          <p v-if="movie.id === review.movie_id">{{ review.username }},<br>{{ review.rate }},<br>{{ review.comment }}</p>
        </div>
      <!-- <p>{{ movies }} </p> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Review',
  props: {
  },
  computed: {
    ...mapState([
        "movies", "reviews"
        ]),
  },
  methods: {
    add () {
        this.$store.commit('addReview', {id: 7, name: "TANSAN"});
        // this.$store.dispatch('actAddReview');
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
