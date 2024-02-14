const navbarStyles = {
  appbar: {
    backgroundColor: "#000000",
    height: "65px",
    position: "fixed",
  },

  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // border: "3px solid red",
    justifyContent: "space-between",
    width: { xs: "100%", md: "98%" },
    margin: "auto",
    padding: 0,
    px: { xs: "10px", sm: "10px", md: "0px" },
  },

  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // border: "3px solid red",
    gap: { xs: "1px", sm: "8px" },
  },

  youtubeLogo: {
    width: { xs: "90px", sm: "115px" },
    height: { xs: "20px", sm: "25px" },
  },

  searchComponent: {
    // border: "2px solid pink",
  },

  searchContainer: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    border: "1px solid #303030",
    borderRadius: "25px",
    height: "43px",
    width: { xs: "96%", md: "420px", lg: "533px" },
    margin: { xs: "auto", md: "0px" },
  },

  inputSearchBar: {
    width: { xs: "90%", md: "390px", lg: "470px" },
    border: "none",
    borderRight: "1px solid #303030",
    px: "10px",
    height: "36px",
    color: "#ffffff",
    fontSize: "16px",
    display: "inline-block",
    "& input": {
      width: { xs: "90%", md: "390px", lg: "460px" },
      backgroundColor: "#000000",
      color: "#ffffff",
      // border: "3px solid red",
      height: "37px",
      outline: "none",
      px: "15px",
      border: "none",
    },
  },

  inputElement: {
    color: "#ffffff",
  },

  searchIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderRightRadius: "25px",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
    backgroundColor: "#303030",
    height: "37px",
    marginLeft: "0.9px",
    border: "1px solid #303030",
    marginRight: "2px",
    marginBottom: "0.5px",
    marginTop: "0.5px",
  },

  searchIcon: {
    mx: "16px",
  },

  navbarRightSideIconsContainer: {
    display: "flex",
    // border: '3px solid red'
    gap: "1px",
  },

  navbarSmallContainer: {
    display: { xs: "flex", md: "none" },
    flexDirection: "column",
  },

  unorderedStack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    // border: "2px solid red",
    backgroundColor: "#000000",
    alignItems: "flex-start",
    height: "calc(100vh - 67px)",
    py: "20px",
  },

  listContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "30px",
    justifyContent: "flex-start",
    width: "80%",
    // border: "3px solid red",
    py: "10px",
    backgroundColor: "#303030",
    borderRadius: "10px",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    paddingLeft: "25px",
  },

  homeText: {
    fontSize: "18px",
    color: "#ffffff",
  },

  drawerComponent: {
    // border: "2px solid red",
    "& .MuiDrawer-paper": { boxSizing: "border-box", width: "285px" },
  },

  drawerContainer: {
    backgroundColor: "#000000",
    marginBottom: "0px",
    height: "100vh",
  },

  searchnavbarContainer: {
    height: "60px",
    // border: "2px solid green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6px",
  },
};

export default navbarStyles;
