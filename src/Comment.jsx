import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const Comment = ({ comment, replies }) => {
  return (
    <div className="comment">


      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="" src="" sx={{ width: 30, height: 30, bgcolor: blue[500] }}/>
        </ListItemAvatar>
        <ListItemText
          primary={comment.body}
          secondary={comment.username}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>

    {replies.length > 0 && (
        <div className="replies">
            {replies.map(reply => (
                <Comment comment={reply} key={reply.id} replies={[]}/>
            ))}
        </div>
    )}
    </div>
  )
}

export default Comment