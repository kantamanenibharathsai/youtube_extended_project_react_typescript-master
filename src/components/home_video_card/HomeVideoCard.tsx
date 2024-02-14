import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentVideo } from "../../redux/features/Slice";
import homeVideoCardStyles from "./HomeVideoCard.Styles";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { YouTubeVideo } from "../../redux/features/Slice";
import { formatCount, formatDate, formatVideoDuration } from "../../utils/ReusableFunc";

interface Props {
  eachVideoObject: YouTubeVideo
}

const HomeVideoCard: React.FC<Props> = ({ eachVideoObject }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <Box
      sx={homeVideoCardStyles.homeVideoCardContainer}
      onClick={() => {
        // navigate("/videoplayer");
        dispatch(currentVideo(eachVideoObject.id));
      }}
    >
      <Box
        sx={homeVideoCardStyles.thumbnailContainer}
      >
        <Box
          component={"img"}
          sx={homeVideoCardStyles.thubmnailImage}
          src={eachVideoObject.snippet.thumbnails.medium.url}
        />
        <Typography
          sx={homeVideoCardStyles.duration}
        >
          {formatVideoDuration(eachVideoObject.contentDetails.duration)}
        </Typography>
      </Box>
      <Stack
        direction={"row"}
        gap={1}
        sx={homeVideoCardStyles.stackContainer}
      >
        <Box sx={homeVideoCardStyles.channelImage} component="img" alt="channel-image" src="https://tse1.mm.bing.net/th?id=OIP.u8Uoy2NXopO2R4R7PcpOBgHaHa&pid=Api&P=0&h=180" />
        <Box sx={homeVideoCardStyles.videoContentContainer}>
          <Box sx={homeVideoCardStyles.videoContentLeftContainer}>
            <Typography sx={homeVideoCardStyles.title}>{eachVideoObject.snippet.localized.title}</Typography>
            <Typography sx={homeVideoCardStyles.author}>{eachVideoObject.snippet.channelTitle}</Typography>
            <Box sx={homeVideoCardStyles.viewsTimeContainer}>
              <Typography sx={homeVideoCardStyles.views}>{formatCount(eachVideoObject.statistics.viewCount)} views . </Typography>
              <Typography sx={homeVideoCardStyles.uploadTime}>{formatDate(eachVideoObject.snippet.publishedAt)}</Typography>
            </Box>
          </Box>
          <MoreVertIcon sx={homeVideoCardStyles.moreVertIcon} />
        </Box>
      </Stack>
    </Box>

  );
}

export default HomeVideoCard;