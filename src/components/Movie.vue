<template>
  <div class="contaner">
      <h1>Movie Review APP</h1>
      <form @submit.prevent="incMovie" class="add-movie-form">
        <label>
        Add New Movie:
        <input type="text" v-model="movie.name"/>
        </label>
        <button type="submit">Add</button>
      </form>
      <form @submit.prevent="incReview" class="add-review-form">
        <label>
        select movie:<br>
        <select v-model="review.movie_id" >
          <option selected disabled value="">---- SELECT ----</option>
          <option
            class="state-options"
            v-for="movie in movies"
            v-bind:value="movie.id"
            v-bind:key="movie.name"
          >{{ movie.name }}</option>
        </select>
        </label>
        <label>
        Reviewer:<br>
        <input type="text" v-model="review.username"/>
        </label>
        <label>
        Score:<br>
        <input type="text" v-model="review.rate"/>
        </label>
        <label>
        Review:<br>
        <textarea v-model="review.comment"/>
        </label>
        <button type="submit">Submit</button>
      </form>
    <div class="movie-list">  
      <div class="movie" v-for="movie in this.movies" v-bind:key="movie.id">
        <div class="movie-title">
            <h2>{{ movie.name }}</h2>
            <div class="see-reviews">
                <p v-if="movie.isHidden === true" @click="movie.isHidden = !movie.isHidden">see reviews</p>
                <p v-else @click="movie.isHidden = !movie.isHidden">hide reviews</p>
            </div>
        </div>
        <div class="movie-review" v-for="review in movie.reviews" v-bind:key="review.name"> 
          <div v-show="movie.isHidden === false">
            <p>reviewer: {{review.username}}</p>
            <p>score: {{review.rate}}</p>
            <p>review: {{review.comment}}</p>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Movie',
  data() {
    return {
      movie: {
        name: '',
        isHidden: false,
      },
      review: {
        username: '',
        rate: '',
        comment: '',
        movie_id: '',
      },
    }
  },
  computed: {
    ...mapState([
        "movies", "reviews"
        ]),
  },
  methods: {
    incMovie () {
        this.$store.commit('addMovie', {id: this.$store.state.movies.length + 1, isHidden: true, name: this.movie.name, review: [],});
    },
    incReview () {
        this.$store.commit('addReview', {username: this.review.username, rate: this.review.rate, comment: this.review.comment, movie_id: this.review.movie_id});
    },
  } 
}
</script>

<style>
body {
  margin: 40px 0 0;
  background-color: white;
}
h1 {
  text-align: center;
}
.add-movie-form {
  border: solid 2px black;
  margin-bottom: 3px;
}
.add-review-form {
  border: solid 2px black;
  display: flex;
  flex-direction: column;
}
.movie-list {
  text-align: center;
  margin-top: 10px;
}
.movie {
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}
.movie-title {
  flex-direction: row-reverse;
}
/* .see-reviews {
  align-self: flex-end;
} */
.movie-review {
  margin: 2px;
  text-align: left;
  line-height: 5px;
}
</style>
