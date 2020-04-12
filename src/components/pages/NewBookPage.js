import React from 'react';
import SearchBookForm from '../forms/SearchBookForm';
import { Segment } from 'semantic-ui-react';
import TopNavigation from '../navigation/TopNavigation';
import BookForm from '../forms/BookForm';

class NewBookPage extends React.Component{
    state = {
        book:null
    }

    onBookSelect = book =>this.setState({book});
    addBook = () => console.log('test')

    render(){
        return(
            <div className ="ui container">
           <TopNavigation />
            <Segment>
            <h1>Add new book to your collection</h1>
            <SearchBookForm onBookSelect={this.onBookSelect} />
            {this.state.book && <BookForm submit={this.addBook} book={this.state.book}/>}
            </Segment>
            </div>
        );
    }
}

export default NewBookPage;