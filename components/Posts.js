import React from 'react';
import Post from './Post';

const posts = [
  {
    title: 'Post title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum diam id augue rutrum, non pellentesque massa ornare. Nunc faucibus ornare volutpat. Curabitur iaculis tempor nunc, in venenatis sem faucibus in.',
    favorite: false,
  },
  {
    title: 'Post title 2',
    description: 'In tempus urna sit amet venenatis pulvinar. Aenean eget erat non leo ornare mollis. Duis accumsan id purus eget finibus. Nunc eget ex et augue gravida accumsan. Duis ex velit, tincidunt fringilla blandit non, sollicitudin in justo. Suspendisse sed tempus orci.',
    favorite: false,
  },
  {
    title: 'Post title 3',
    description: 'In dictum in risus et ultrices. Nullam eget risus volutpat, maximus tortor id, tincidunt ex. Duis efficitur orci sed est fringilla bibendum. Ut fringilla orci a laoreet dignissim.',
    favorite: false,
  },
  {
    title: 'Post title 4',
    description: 'Nullam rutrum euismod volutpat. Donec eros elit, posuere eget sapien a, volutpat tempor orci. Curabitur consequat convallis justo ultrices vulputate.',
    favorite: false,
  },
  {
    title: 'Post title 5',
    description: 'Maecenas faucibus hendrerit nunc, non hendrerit sem ullamcorper non. Nulla purus mi, pellentesque a tortor a, condimentum tristique tellus. Fusce velit nulla, luctus id vestibulum vel, aliquet sit amet neque. Donec facilisis ac ex sit amet porttitor.',
    favorite: false,
  },
  {
    title: 'Post title 6',
    description: 'Morbi iaculis a ante a consectetur. Suspendisse sed dignissim enim. Quisque eleifend vitae ante non convallis. Pellentesque molestie varius purus ac auctor.',
    favorite: false,
  },
];

const Posts = () => posts.map(({ title, description, favorite }) => <Post key={title} title={title} description={description} favorite={favorite} />);

export default Posts;
