import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from '../forms/LoginForm';
import {login} from '../../actions/auth';

class LoginPage extends React.Component{
    
    //endpoint 
    submit = data =>
        // when user login (to redux) successfully return promise to back to homepage
        this.props.login(data).then(()=>this.props.history.push('/dashboard'));
        // history route
    render(){
        return(
            <div>
            <br></br>
            <h1>Login Page</h1>
            <LoginForm submit={this.submit} /> 
            </div>
        );
    }
}

//define proptype
LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};


export default connect(null, {login})(LoginPage);
