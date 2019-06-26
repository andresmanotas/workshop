import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Post = ({
  title,
  description,
  favorite,
}) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Typography variant="body2" component="p">
        {description}
      </Typography>
      <Button variant="contained" color="primary">Delete</Button>
      {favorite && <FavoriteIcon />}
    </CardContent>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  favorite: PropTypes.bool,
};

Post.defaultProps = {
  description: '',
  favorite: false,
};

export default Post;
