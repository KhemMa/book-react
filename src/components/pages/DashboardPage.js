import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
//import books from '../../reducers/books';
import { allBooksSelector } from '../../reducers/books';
import  AddBookCtA  from '../ctas/AddBookCtA';
import TopNavigation from '../navigation/TopNavigation';
  

const DashboardPage = ({isConfirmed, books}) =>(
    <div>
    {/* {!isConfirmed &&<ConfirmEmailMessage />} */}
    <TopNavigation />
        {books.length === 0 && <AddBookCtA />}
    </div>
);

DashboardPage.propTypes ={
 //  isConfirmed: PropTypes.bool.isRequired,
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
};

function mapStateToProps(state){
    return{
       //isConfirmed: !!state.user.confirmed,
        books: allBooksSelector(state)
    }
}


export default connect(mapStateToProps)(DashboardPage);


// class DashboardPage extends React.Component{
//     state = []

    
//     render(){
//         return(
//             <div></div>
//         );
//     }
// }

// export default DashboardPage;