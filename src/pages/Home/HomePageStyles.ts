const homePageStyles = {
  homeChildContainer: {
    border: "3px solid red",
    background : "#000000",
    marginTop: "63px",
    position: "relative"
  },

  homePageVideosContainer: {
    display: "grid",
    gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
    flexDirection: "row",
    flexWrap: 'wrap',
    gap: "20px",
    width: {xs:"100%", md:"calc(100% - 300px)"},
    // border: "2px solid green",
    marginLeft: "auto", 
    background: '#000000',
    paddingTop : "40px",
    px: {xs: "9px", sm: "13px"}
  },

  searchList : {
    backgroundColor: "#212121",
    height: "600px",
    width: { xs: "90%", md: "390px", lg: "470px" },
    px: "15px",
    py: "20px",
    borderRadius: "18px",
    position: "absolute",
    top: "0px",
    left: "37%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },


};

export default homePageStyles;
