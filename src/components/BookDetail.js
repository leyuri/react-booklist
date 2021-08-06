import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    marginTop : '10px'
  },
  media: {
    height: 300,
    width: 200,
    border: '1px solid gray',
    marginLeft: '15px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  alert : {
    marginTop : '20px'
  }
}));

function BookDetail({book}) {
  const classes = useStyles();

  if (!book) { 
      return (
        <Alert className={classes.alert} severity="warning">No book selected</Alert>
      )
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        title={book.title}
        subheader={book.subtitle}
      />
      {
        book.img && (
          <CardMedia
          className={classes.media}
          image={book.img}
        />
        )
      }
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {book.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}


const mapStateToProps = (state, ownProps) => {
    return {
        book: state.selected
    }
}

export default connect(mapStateToProps)(BookDetail)

