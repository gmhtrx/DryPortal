import axios from "axios";

export default {
 
  signupUser: function(userData) {
    console.log("USER DATA");
    console.log(userData)
    return axios.post("/api/auth/register", userData);
  },

  loginUser: function(userData) {
    return axios.post("/api/auth/login", userData);
  },

  getMessage: function() {
    return axios.get("/api/items");
  },

  deleteOrder: function(id) {
    return axios.delete("/api/books/" + id);
  },

  saveOrder: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
