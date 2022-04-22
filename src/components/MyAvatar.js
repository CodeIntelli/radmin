// hooks
// import useAuth from '../hooks/useAuth';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  // const { user } = useAuth();
  const photoURL = '';
  return (
    <Avatar src={'demo'} alt={'SHIVA'} color={photoURL ? 'default' : createAvatar('Shiva').color} {...other}>
      {createAvatar('shiva').name}
    </Avatar>
  );
}
