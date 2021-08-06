import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';


function BookList({ books, dispatch }) {
    return (
        <List component="nav" aria-label="main list">
            {books.map(item => {
                return (
                    <div key={item.title}>
                        <ListItem button onClick={() => {
                              dispatch({type : 'BOOK_SELECT', payload : item})
                        }} >
                            <ListItemText
                                primary={item.title}
                                secondary={item.subtitle}
                            />
                            <Badge badgeContent={item.likes} color="secondary">
                                <FavoriteIcon style={{color: 'pink'}}/>
                            </Badge>
                        </ListItem>
                        <Divider />
                    </div>
                )
            })}
        </List>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList)

