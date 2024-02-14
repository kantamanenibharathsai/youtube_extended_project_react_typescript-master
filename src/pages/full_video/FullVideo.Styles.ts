const fullVideoStyles = {
  mainContainer: {
    //  border: "30px solid red",
    // width: "100vh"
    width: "100%",
  },

  bodyContainer: {
    py: { xs: "5px", md: "25px", lg: "30px", xl: "20px" },
    marginTop: "65px",

    minHeight: "92.6vh",
    background: "#000000",
    width: "100%",
  },

  bodyChildContainer: {
    // border: "3px solid green",
    width: { xs: "100%", sm: "90%" },
    margin: "auto",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    justifyContent: { lg: "space-between" },
    gap: { md: "50px", lg: "0px" },
  },

  leftContainer: {
    width: { xs: "100%", md: "100%", lg: "65%", xl: "75%" },
    // border: "2px solid yellow",
  },

  reactPlayerContainer: {
    borderRadius: "16px",
    backgroundColor: "black",
    width: { md: "100%", lg: "100%", xl: "100%" },
    // border: "3px solid orange",
  },

  reactPlayer: {
    width: "100%",
    padding: 0,
    margin: 0,
  },

  contentParentSmallContainer: {
    display: { xs: "flex", lg: "none" },
    flexDirection: "column",
    gap: "15px",
    width: { xs: "99%", sm: "96%" },
    margin: "auto",
    marginTop: "18px",
    // border: "4px solid red",
  },

  videoInfoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "13px",
    // border: "2px solid red",
  },

  videoNameText: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.18px",
  },

  infoContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    // border: "3px solid orange",
    gap: { xs: "10px", sm: "0px" },
  },

  timeViewsText: {
    color: "#AAA",
    fontFamily: "Roboto",
    fontSize: { xs: "12px", sm: "14px" },
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },

  allButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: { xs: "15px", sm: "20px" },
    justifyContent: { xs: "flex-start", sm: "space-between" },
  },

  iconSpanTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5px",
  },

  icon: {
    color: "#9E9E9E",
    width: "20px",
    height: "20px",
  },

  groupIcon: {
    width: "21px",
    height: "11px",
  },

  iconText: {
    fontFamily: "Roboto",
    fontSize: { xs: "12px", sm: "13px" },
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    textTransform: "uppercase",
    color: "#ffffff",
  },

  moreHorizIcon: {
    transform: "rotate(90deg)",
    color: "#ffffff",
    // border: "2px solid red",
  },

  divider: {
    border: "1px solid #303030",
    width: "100%",
  },

  displayLargeContainer: {
    display: { xs: "none", lg: "block" },
  },

  videoDescContainer: {
    // border: "2px solid pink",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "flex-start",
  },

  profilePicImage: {
    width: "48px",
    height: "48px",
  },

  rightVideoDescContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    flexGrow: 1,
    // border: "3px solid white",
    paddingTop: "7px",
  },

  textSubscribeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // border: "3px solid white"
  },

  textSubscribeLeftContainer: {
    // border: "3px solid pink"
  },

  personNameText: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#ffffff",
  },

  noOfSubscribersText: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#AAA",
  },

  subscribesButton: {
    background: "#CC0000",
    borderRadius: "2px",
    border: "none",
    cursor: "pointer",
    color: "#ffffff",
    width: "110px",
    height: "35px",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    "&:hover": {
      background: "#CC0000",
      color: "#ffffff",
    },
  },

  personDescriptionText: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#fff",
  },

  showMoreButton: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    color: "#AAA",
    alignSelf: "flex-start",
    padding: "0px",
  },

  commentsParentContainer: {
    // border: "2px solid green",
  },

  commentsSortbyContainer: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },

  commentsNoText: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
  },

  sortbyButton: {
    m: 1,
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px",
    textTransform: "uppercase",
  },

  toolTipContentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  sortIcon: {
    marginRight: "10px",
    color: "#8B8B8B",
  },

  publicCommentContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    // border: "1px solid white"
  },

  userAvatar: {
    width: "40px",
    height: "40px",
  },

  publicCommentDividerContainer: {
    // border: "1px solid red",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    // paddingTop: "34px"
  },

  inputElement: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    // lineHeight: "20px",
    color: "#AAA",
    border: "none",
    outline: "none",
    background: "transparent",
    paddingBottom: "3px",

    borderBottom: "1px solid #303030",
    height: "20px",
    marginTop: "25px",
  },

  smileyButtonsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  smileyImage: {
    width: "23px",
    height: "23px",
    color: "#ffffff",
  },

  cancelCommentBtnsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0px",
  },

  cancelButton: {
    backgroundColor: "transparent",
    border: "none",
    width: "120px",
    height: "40px",
    cursor: "pointer",
    color: "#ffffff",
    fontWeight: "800",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ffffff",
      fontWeight: "800",
      textTransform: "capitalize",
    },
  },

  commentButton: {
    backgroundColor: "#303030",
    borderRadius: "40px",
    width: "104px",
    height: "37px",
    cursor: "pointer",
    color: "#ffffff",
    fontWeight: "400",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#303030",
      color: "#ffffff",
      textTransform: "capitalize",
    },
  },

  publicCommentText: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    color: "#AAA",
  },

  listCommentsComponent: {
    listStyleType: "none",
    // border: "2px solid white",
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  rightSideContainer: {
    // border: "3px solid blue",
    display: { xs: "none", lg: "flex" },
    flexDirection: "column",
    gap: "10px",
  },

  btnsContainer: {
    display: "flex",
    gap: "10px",
    // border: "3px solid orange",
  },

  button: {
    background: "#ffffff",
    color: "black",
    width: "35px",
    height: "25px",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "9px",
    padding: "0px",
    minWidth: "0px",
    "&:hover": {
      background: "#ffffff",
    },
  },

  nameButton: {
    background: "#303030",
    width: "120px",
    height: "25px",
    color: "#ffffff",
    border: "1px solid #ffffff",
    cursor: "pointer",
    "&:hover": {
      background: "#303030",
    },
  },

  listofVideosContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    // border: "4px solid pink",
    background: "black",
    justifyContent: { md: "space-between", lg: "flex-start" },
  },

  commentContainer: {
    padding: "10px",
    width: "100%",
    margin: "auto",
    backgroundColor: "#303030",
    borderRadius: "14px",
    display: { xs: "block", lg: "none" },
  },

  commentNumber: {
    fontSize: "16px",
    color: "#ffffff",
  },

  closeIcon: {
    color: "#ffffff",
  },

  commentProfileNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
  },

  profileTextFieldContainer: {
    borderTop: "1px solid #303030",
    borderBottom: "1px solid #303030",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: "10px",
  },

  commentUserProfileImg: {
    width: "40px",
    height: "40px",
  },

  mobileAddCommentTextfield: {
    outline: "none",
    border: "1px solid #303030",
    borderRadius: "5px",
    width: "calc(100% - 50px)",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "500",
    input: {
      "&::placeholder": {
        color: "white",
      },
      color: "white",
    },
  },

  commentText: {
    fontSize: "12px",
    color: "#ffffff",
  },

  commentsParentSmallContainer: {
    backgroundColor: "black",
    display: { xs: "flex", lg: "none" },
    // border: "2px solid red",
    width: { xs: "99%", sm: "96%" },
    margin: "auto",
    marginTop: "18px",
    flexDirection: 'column',
    gap: "15px"
  },

  commentCloseIconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  contentParentLargeContainer: {
    display: { xs: "none", lg: "flex" },
    flexDirection: "column",
    gap: "15px",
    width: { xs: "99%", sm: "96%" },
    margin: "auto",
    marginTop: "18px",
    // border: "4px solid red",
  },

  mobileListOfSuggestedVideos : {
    width: "100%",
    marginTop: "15px",
    display: {xs: "grid", lg: 'none'},
    gridTemplateColumns: {xs: "96%", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)"},
    justifyContent: {xs:"center", sm:"space-between"},
    gap: {sm: "10px", md: "40px"},
    alignContent: "center",
    margin: "auto",
    justifyItems: "center",
    // border: "3px solid red"
  }
};

export default fullVideoStyles;
