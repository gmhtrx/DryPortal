import axios from "axios";

export default {
 
  postUser: function(userData) {
    console.log("USER DATA");
    console.log(userData)
    return axios.post("/api/auth/register", userData);
  },

  getUser: function(id) {
    return axios.get("/api/auth/" + id);
  },

  deleteOrder: function(id) {
    return axios.delete("/api/books/" + id);
  },

  saveOrder: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
