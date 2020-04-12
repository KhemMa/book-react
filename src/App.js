import React from 'react';
import PropTypes from 'prop-types';
import {Route} from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import NewBookPage from "./components/pages/NewBookPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";


const App= ({ location }) =>( 
    <div className = "ui container">
     <Route location={location} path='/' exact component={HomePage}/>
     <GuestRoute location={location} path='/about' exact component={About}/> 
     <GuestRoute  location={location} path='/login' exact component={LoginPage}/>
     <GuestRoute  location={location} path='/signup' exact component={SignupPage}/>
     <UserRoute  location={location} path='/dashboard' exact component={DashboardPage}/>
     <UserRoute  location={location} path='/books/new' exact component={NewBookPage}/>
    </div>
);

App.propTypes ={
  location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
  }).isRequired,
  //isAuthenticated : PropTypes.bool.isRequired
};

// function mapStateToProps(state){
//   return {
//     isAuthenticated: !!state.user.email
//   };
// }

// export default connect(mapStateToProps)(App);

export default App;