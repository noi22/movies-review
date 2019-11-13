import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [
              { id: 1,
                isHidden: true, 
                name: "Star Wars", 
                reviews: [
                  {
                    username: "Jake", 
                    rate: 55, 
                    comment : "good",
                    movie_id : 1,
                  }
                ]
              },
              { id: 2, 
                isHidden: true, 
                name: "Titanic", 
                reviews: [
                   {
                    username: "Amy", 
                    rate: 34,
                    comment : "bad",
                    movie_id : 2,
                   },
                   {
                    username: "Mike", 
                    rate: 67,
                    comment : "awesome",
                    movie_id : 2,
                   },
                   {
                    username: "Takashi", 
                    rate: 87,
                    comment : "good",
                    movie_id : 2,
                   },
                ]
              },
              { id: 3, 
                isHidden: true, 
                name: "The Matrix", 
                reviews: [
                   {
                    username: "Amy", 
                    rate: 84,
                    comment : "excellent",
                    movie_id : 3,
                   },
                   {
                    username: "Joe", 
                    rate: 67,
                    comment : "not bad",
                    movie_id : 3,
                   },
                   {
                    username: "Yumi", 
                    rate: 27,
                    comment : "awful",
                    movie_id : 3,
                   },
                ]
              },
              { id: 4, 
                isHidden: true, 
                name: "Dirty Harry", 
                reviews: [
                   {
                    username: "James", 
                    rate: 39,
                    comment : "bad",
                    movie_id : 4,
                   },
                   {
                    username: "Misa", 
                    rate: 27,
                    comment : "bad",
                    movie_id : 4,
                   }
                ]
              },
    ]
  },
  mutations: {
    addMovie (state, payload) {
       state.movies.push(payload);
    },
    addReview (state, payload) {
       state.movies.forEach(movie => {
         if (movie.id === payload.movie_id)
          movie.reviews.push(payload);
       });
    }
  }
})