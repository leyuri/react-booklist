import React from 'react';
import { connect } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { selectBook } from '../action';

function BookList({books, selectBook}) {
    return (
    <List component="nav" aria-label="main mailbox folders">
    {books.map(item => (
        <div key={item.title}>
        <ListItem button onClick={()=>{ selectBook(item) }}>
            <ListItemText
            primary={item.title}
            secondary={item.subtitle}
            />
        <Badge badgeContent={item.likes} color="secondary">
            <FavoriteIcon style={{color: 'pink'}}/>
        </Badge>
        </ListItem>
        <Divider/>
        </div>
    ))}
        
    </List>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      books: state.books
    }
}

export default connect(
    mapStateToProps, { selectBook }
)(BookList)
