import { Box, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { currentVideo } from "../../redux/features/Slice";
import  sideVideoCardStyles from "./SideCardVideo.Styles";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import {YouTubeVideo} from "../../redux/features/Slice"
import { formatCount, formatDate , formatVideoDuration} from "../../utils/ReusableFunc";


interface Props {
  eachVideoObject: YouTubeVideo
}

interface IState {
  isMoreVertIconDisplayed : boolean
}

const SideCardVideo: React.FC<Props> = ({ eachVideoObject }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMoreVertIconDisplayed, setIsMoreVertIconDisplayed] = useState<IState["isMoreVertIconDisplayed"]>(false)


  return (
    <Box
      sx={sideVideoCardStyles.sideVideoCardContainer}
      onClick={() => {
        navigate(`/videoplayer/${eachVideoObject.id}`);
        dispatch(currentVideo(eachVideoObject.id));
      }}
      onMouseEnter = {() => {setIsMoreVertIconDisplayed(true)}}
      onMouseLeave = {() => {setIsMoreVertIconDisplayed(false)}}
    >
      <Box
        sx={sideVideoCardStyles.thumbnailContainer}
      >
        <Box
          component={"img"}
          sx={sideVideoCardStyles.thubmnailImage}
          src={eachVideoObject.snippet.thumbnails.medium.url}
        />
        <Typography
          sx={sideVideoCardStyles.duration}
        >
          {formatVideoDuration(eachVideoObject.contentDetails.duration)}
        </Typography>
      </Box>
      <Stack
        direction={"row"}
        gap={1}
        sx={sideVideoCardStyles.stackContainer}
      >
        <Box sx={sideVideoCardStyles.videoContentContainer}>
          <Box sx={sideVideoCardStyles.videoContentLeftContainer}>  
          <Typography sx={sideVideoCardStyles.title}>{eachVideoObject.snippet.title}</Typography>
          <Typography sx={sideVideoCardStyles.author}>{eachVideoObject.snippet.channelTitle}</Typography>
          <Box sx={sideVideoCardStyles.viewsTimeContainer}>
          <Typography sx={sideVideoCardStyles.views}>{formatCount(eachVideoObject.statistics.viewCount)} views . </Typography>
          <Typography sx={sideVideoCardStyles.uploadTime}>{formatDate(eachVideoObject.snippet.publishedAt)}</Typography>
          </Box>
          </Box>
          <MoreVertIcon sx={{...sideVideoCardStyles.moreVertIcon, visibility : isMoreVertIconDisplayed ? "visible" : 'hidden'}}/>
        </Box>
      </Stack>
    </Box>
  );
}

export default SideCardVideo;