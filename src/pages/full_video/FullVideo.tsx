import { Avatar, Box, Button, Divider, List, TextField, Tooltip, TooltipProps, Typography, tooltipClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Navbar from '../../components/navbar/Navbar';
import fullVideoStyles from './FullVideo.Styles';
import SideCardVideo from '../../components/side_card_video/SideCardVideo';
import SentimentVerySatisfiedRoundedIcon from '@mui/icons-material/SentimentVerySatisfiedRounded';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Share from "../../assets/icons/Share.png"
import Group from '../../assets/icons/Group.png';
import styled from '@emotion/styled';
import SortIcon from '@mui/icons-material/Sort';
import Comment from '../../components/comments/Comment';
import CloseIcon from '@mui/icons-material/Close';
import userHoc from '../../utils/UserHoc';
import HomeVideoCard from '../../components/home_video_card/HomeVideoCard';
import { YouTubeVideo, fetchVideosData } from '../../redux/features/Slice';
import { RootState } from '../../redux/store/Store';
import { useSelector } from 'react-redux';
import { formatCount, timeAgo } from '../../utils/ReusableFunc';

interface IState {
  isMuted: boolean,
  playing: boolean,
  isMobileCommentsDisplayed: boolean,
  publicComment: string
}

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState<IState["isMuted"]>(true);
  const [playing, setPlaying] = useState<IState["playing"]>(false);
  const [isMobileCommentsDisplayed, setIsMobileCommentsDisplayed] = useState<IState["isMobileCommentsDisplayed"]>(false)
  const [publicComment, setPublicComment] = useState<IState["publicComment"]>("")

  const youtubeData: YouTubeVideo[] = useSelector((state: RootState) => state.player.youtubeVideosData)
  const currentVideoUrlId = useSelector((state: RootState) => state.player.currentVideoUrlId)
  const currentPlayingVideoObject = youtubeData.find(eachVideoObject => eachVideoObject.id === currentVideoUrlId)
  const numbersArray = Array(255).fill(0).map((_, index) => index + 1);

  const handlePlayerReady = () => {
    setPlaying(true);
  };

  const getWindowHeight = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1536) return '700px';
    else if (windowWidth <= 1200 && windowWidth > 900) return '600px';
    else if (windowWidth <= 900 && windowWidth > 600) return '350px';
    else if (windowWidth <= 600) return '330px';
  };

  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} placement="bottom" classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {

    },
  });


  useEffect(() => {
    fetchVideosData()
  })


  const longText = <Box sx={fullVideoStyles.toolTipContentContainer}>
    <Typography>Sort</Typography>
    <Typography>Comments</Typography>
  </Box>


  const displayJSX = (
    <><Box sx={fullVideoStyles.videoInfoContainer}>
      {/* <Typography sx={fullVideoStyles.videoNameText}>{currentPlayingVideoObject?.snippet.title}</Typography> */}
      {currentPlayingVideoObject && currentPlayingVideoObject.snippet && (
        <Typography sx={fullVideoStyles.videoNameText}>
          {currentPlayingVideoObject.snippet.title}
        </Typography>
      )}
      <Box>
        <Box sx={fullVideoStyles.infoContainer}>
          {/* <Typography sx={fullVideoStyles.timeViewsText}>{formatCount(currentPlayingVideoObject!.statistics.viewCount)} views . {timeAgo(currentPlayingVideoObject!.snippet.publishedAt)}</Typography> */}
          <Typography sx={fullVideoStyles.timeViewsText}>
            {currentPlayingVideoObject && currentPlayingVideoObject.statistics && currentPlayingVideoObject.snippet && (
              <>
                {formatCount(currentPlayingVideoObject.statistics.viewCount)} views . {timeAgo(currentPlayingVideoObject.snippet.publishedAt)}
              </>
            )}
          </Typography>
          <Box sx={fullVideoStyles.allButtonsContainer}>
            <Box sx={fullVideoStyles.iconSpanTextContainer}>
              <ThumbUpOffAltIcon sx={fullVideoStyles.icon} />
              <Box component="span" sx={fullVideoStyles.iconText}>
                {currentPlayingVideoObject && currentPlayingVideoObject.statistics && (
                  <>
                    {formatCount(currentPlayingVideoObject.statistics.viewCount)}
                  </>
                )}
              </Box>
            </Box>
            <Box sx={fullVideoStyles.iconSpanTextContainer}>
              <ThumbDownOffAltIcon sx={fullVideoStyles.icon} />
              <Box component="span" sx={fullVideoStyles.iconText}>632</Box>
            </Box>
            <Box sx={fullVideoStyles.iconSpanTextContainer}>
              <Box component="img" alt="icon" sx={fullVideoStyles.icon} src={Share} />
              <Box component="span" sx={fullVideoStyles.iconText}>SHARE</Box>
            </Box>
            <Box sx={fullVideoStyles.iconSpanTextContainer}>
              <Box component="img" alt="icon" sx={{ ...fullVideoStyles.icon, ...fullVideoStyles.groupIcon }} src={Group} />
              <Box component="span" sx={fullVideoStyles.iconText}>SAVE</Box>
            </Box>
            <MoreVertIcon sx={{ ...fullVideoStyles.icon, ...fullVideoStyles.moreHorizIcon }} />
          </Box>
        </Box>
      </Box>
    </Box>
      <Divider sx={fullVideoStyles.divider} />
      <Box sx={fullVideoStyles.videoDescContainer}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={fullVideoStyles.profilePicImage} />
        <Box sx={fullVideoStyles.rightVideoDescContainer}>
          <Box sx={fullVideoStyles.textSubscribeContainer}>
            <Box sx={fullVideoStyles.textSubscribeLeftContainer}>
              <Typography sx={fullVideoStyles.personNameText}>Marcus Levin</Typography>
              <Typography sx={fullVideoStyles.noOfSubscribersText}>1.2M subscribers</Typography>
            </Box>
            <Button sx={fullVideoStyles.subscribesButton}>
              SUBSCRIBES
            </Button>
          </Box>
          <Typography sx={fullVideoStyles.personDescriptionText}>Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.</Typography>
          <Button sx={fullVideoStyles.showMoreButton}>SHOW MORE</Button>
        </Box>
      </Box>
      <Divider sx={fullVideoStyles.divider} />
      <Box sx={fullVideoStyles.displayLargeContainer}>
        <Box sx={fullVideoStyles.commentsParentContainer}>
          <Box sx={fullVideoStyles.commentsSortbyContainer}>
            <Typography sx={fullVideoStyles.commentsNoText}>
              {currentPlayingVideoObject && currentPlayingVideoObject.statistics && (
                <>
                  {formatCount(currentPlayingVideoObject.statistics.commentCount)}
                </>
              )}
              Comments</Typography>
            <CustomTooltip title={longText}>
              <Button sx={fullVideoStyles.sortbyButton}><SortIcon sx={fullVideoStyles.sortIcon} /> Sort By</Button>
            </CustomTooltip>
          </Box>
          <Box sx={fullVideoStyles.publicCommentContainer}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={fullVideoStyles.userAvatar} />
            <Box sx={fullVideoStyles.publicCommentDividerContainer}>
              <Box component="input" placeholder="Add a comment..." sx={fullVideoStyles.inputElement} />
              <Box sx={fullVideoStyles.smileyButtonsContainer}>
                <SentimentVerySatisfiedRoundedIcon sx={fullVideoStyles.smileyImage} />
                <Box sx={fullVideoStyles.cancelCommentBtnsContainer}>
                  <Button sx={fullVideoStyles.cancelButton}>Cancel</Button>
                  <Button sx={fullVideoStyles.commentButton}>Comment</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <List sx={fullVideoStyles.listCommentsComponent}>
          {numbersArray.map(e => <Comment key={e} />)}
        </List>
      </Box>
      <Box sx={fullVideoStyles.commentContainer} onClick={() => setIsMobileCommentsDisplayed(true)}>
        <Typography sx={fullVideoStyles.commentNumber}>Comments 2.1K</Typography>
        <Box sx={fullVideoStyles.commentProfileNameContainer}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={fullVideoStyles.commentUserProfileImg} />
          <Typography sx={fullVideoStyles.commentText}>Your skin isn't paper, don't cut it. Your neck isn't a coat, don't hang it. Your body isn't a...</Typography>
        </Box>
      </Box>
      <Box sx={fullVideoStyles.mobileListOfSuggestedVideos}>
        {youtubeData.map(eachVideoObj => (
          <HomeVideoCard key={eachVideoObj.id} eachVideoObject={eachVideoObj} />
        ))}
      </Box>
    </>
  )

  return (
    <Box sx={fullVideoStyles.mainContainer}>
      <Navbar />
      <Box sx={fullVideoStyles.bodyContainer}>
        <Box sx={fullVideoStyles.bodyChildContainer}>
          <Box sx={fullVideoStyles.leftContainer}>
            <Box>
              <Box sx={fullVideoStyles.reactPlayerContainer}>
                <ReactPlayer
                  //   muted={isMuted}
                  height={getWindowHeight()}
                  width="98%"
                  sx={fullVideoStyles.reactPlayer}
                  // url="https://www.youtube.com/watch?v=-Q81PCvItt8&list=RD-Q81PCvItt8&start_radio=1"
                  url={`https://www.youtube.com/watch?v=${currentVideoUrlId.toString()}`}
                  controls={true}
                  playing={playing}
                  onReady={handlePlayerReady}
                />
              </Box>
              {!isMobileCommentsDisplayed &&
                <Box sx={fullVideoStyles.contentParentSmallContainer}>
                  {displayJSX}
                </Box>
              }
              <Box sx={fullVideoStyles.contentParentLargeContainer}>
                {displayJSX}
              </Box>
              {isMobileCommentsDisplayed && (
                <Box sx={fullVideoStyles.commentsParentSmallContainer}>
                  <Box sx={fullVideoStyles.commentCloseIconContainer}>
                    <Typography sx={fullVideoStyles.commentNumber}>Comments 2.1K</Typography>
                    <CloseIcon sx={fullVideoStyles.closeIcon} onClick={() => { setIsMobileCommentsDisplayed(false) }} />
                  </Box>
                  <Box sx={fullVideoStyles.profileTextFieldContainer}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={fullVideoStyles.commentUserProfileImg} />
                    <TextField value={publicComment} placeholder="Add a comment..." variant="outlined" color='success' sx={fullVideoStyles.mobileAddCommentTextfield} onChange={e => { setPublicComment(e.target.value) }} />
                  </Box>
                  <List sx={fullVideoStyles.listCommentsComponent}>
                    {numbersArray.map(e => <Comment key={e} />)}
                  </List>
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={fullVideoStyles.rightSideContainer}>
            <Box sx={fullVideoStyles.btnsContainer}>
              <Button sx={fullVideoStyles.button}>
                All
              </Button>
              <Button sx={{ ...fullVideoStyles.button, ...fullVideoStyles.nameButton }}>
                From Marcus levin
              </Button>
            </Box>
            <Box sx={fullVideoStyles.listofVideosContainer}>
              {youtubeData.map(eachVideoObj => (
                <SideCardVideo key={eachVideoObj.id} eachVideoObject={eachVideoObj} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export default userHoc(VideoPlayer);
