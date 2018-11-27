class Auth {


    static authenticateUser(token) {
      localStorage.setItem('jwtToken', token);
    }
  
 
    static isUserAuthenticated() {
      return localStorage.getItem('jwtToken') !== null;
    }
  
    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
      localStorage.removeItem('jwtToken');
    }
  
    /**
     * Get a token value.
     */
  
    static getToken() {
      return localStorage.getItem('jwtToken');
    }
  
  }
  
  export default Auth;