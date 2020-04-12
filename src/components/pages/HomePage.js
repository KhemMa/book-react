import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth"

//if user is authenticated user will be able to logout 
const HomePage = ({isAuthenticated, logout}) => (
  <div>
    <br></br>
    <h1>Book App</h1>
    <h2>Home Page</h2>
    { isAuthenticated ? (
    <button onClick={()=>logout()}>Logout</button>) :( 
    <div><h3><Link to="/login">Login</Link></h3>  <h3><Link to="/signup">SignUp</Link></h3> <h3><Link to="/about">About</Link></h3></div>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    isAuthenticated: !!state.user.token
  }
}
export default connect(mapStateToProps,{logout : actions.logout})(HomePage);