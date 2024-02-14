import { Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import commentStyles from "./Comment.Styles";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


const Comment = () => {
    return (
        <ListItem alignItems="flex-start" sx={commentStyles.listItemComponent}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={commentStyles.listItemAvatar} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Box sx={commentStyles.listItemTextPrimary}>
                        <Typography
                            sx={commentStyles.commenterName}
                            component="span"
                            variant="body2"
                            color="#ffffff"
                        >
                            James Gouse
                        </Typography>
                        <Typography
                            sx={commentStyles.commentTime}
                            component="span"
                            variant="body2"
                            color="#ffffff"
                        >
                            8 hours ago
                        </Typography>
                    </Box>
                }
                secondary={
                    <Box sx={commentStyles.listItemTextSecondaryParent}>
                        <Box sx={commentStyles.listItemTextSecondaryChild}>
                            <Typography
                                sx={commentStyles.commentText}
                                component="span"
                                variant="body2"
                                color="#ffffff"
                            >
                                Wow, world is full of different skills
                            </Typography>
                            <Box sx={commentStyles.likeDislikeReplyBtnsContainer}>
                                <Box component="span" sx={commentStyles.iconSpanLikeDislike}><ThumbUpOffAltIcon sx={commentStyles.likeDislikeIcon} /> 1</Box>
                                <Box component="span" sx={commentStyles.iconSpanLikeDislike}><ThumbDownOffAltIcon sx={commentStyles.likeDislikeIcon} /> 1</Box>
                                <Button sx={commentStyles.replyButton}>Reply</Button>
                            </Box>
                        </Box>
                        <MoreVertIcon sx={commentStyles.moreVertIcon} />
                    </Box>
                }
            />
        </ListItem>
    )
}


export default Comment