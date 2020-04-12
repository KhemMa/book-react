import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class About extends React.Component{ 
    render(){
        return(
            <div>
                <br></br>
            <h1 className="card-title">Web Information</h1>
            <p>The book app for those who want to noted a book they interest.</p>

            <h2>Developer information</h2>
            <p>Khem   Mahamart   610610696</p>
            <p>Jirayu Kasemsuk   600612149</p>
            <p>Sapol  Kosawang   610610619</p>
            <p>Custom API as a backend</p>
            <p>Incomplete Web app and api</p>
            <div className='ui container'>
            <Link to="/">
              <h3>
                <Button>Home</Button>
              </h3>
            </Link>
            </div>
            </div>
        );
    }
}


About.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};


export default connect(null)(About);
