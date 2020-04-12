import { createSelector } from "reselect";


export default function books(state = {},action = {}) {
    switch(action.type){
        default: 
        return state;
    }
}

// Books Selectors, BooksHash
export const booksSelector = state => state.books;

//convert to array of object
export const allBooksSelector = createSelector(
    booksSelector,
    booksHash => Object.values(booksHash)
);

// {
//     1:{

//     },
//     2:{

//     }
// }