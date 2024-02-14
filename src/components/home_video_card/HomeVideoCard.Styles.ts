const homeVideoCardStyles = {
   homeVideoCardContainer: {
      width: { xs: "100%", sm: "100%", md: "300", lg: 360 },
      // border: "3px solid pink",
      // "&:hover": { transform: "scale(1.1)", transition: "0.2s" },
      marginBottom: "13px"
   },

   thumbnailContainer: {
      width: "100%",
      height: "200px",
      // border: "3px solid red",
      position: "relative"
   },

   thubmnailImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      borderRadius: "12px"
   },

   description: {
      fontSize: "16px",
      color: "white"
   },

   duration: {
      position: "absolute",
      bottom: 10,
      right: 10,
      bgcolor: "black",
      px: 0.6,
      color: "white",
      display: "inline",
      fontSize: "11px",
      borderRadius: "5px"
   },

   stackContainer: {
      pl: 1,
      pt: 0.5,
      alignItems: "start",
      // border: "4px solid green",
      marginTop: "10px"
   },

   channelImage: {
      borderRadius: "50%",
      height: "33px",
      width: "33px"
   },

   videoContentContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      // border: "2px solid yellow",
      flexGrow: "1"
   },

   videoContentLeftContainer : {
      display: "flex",
      flexDirection: "column",
      gap: '2px',
     
   },

   title: {
      fontSize: '14px',
      color: "white"
   },

   author : {
      color: "#303030",
      fontSize: "13px"
   },

   moreVertIcon : {
      color: "#ffffff",
      cursor : "pointer"
   },

   viewsTimeContainer : {
      display: "flex"
   },

   views : {
      fontSize: "13px",
      color: "#303030"
   },

   uploadTime : {
      fontSize: "13px",
      color: "#303030"
   }
};

export default homeVideoCardStyles;
