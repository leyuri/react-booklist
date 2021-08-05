import React from 'react';
import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

function BookList({ books }) {
    return (
        <List component="nav" aria-label="main list">
            {books.map(item => {
                return (
                    <div>
                        <ListItem button>
                            <ListItemText
                                primary={item.title}
                                secondary={item.subtitle}
                            />
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

