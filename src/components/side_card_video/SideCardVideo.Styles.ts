const sideVideoCardStyles = {
    sideVideoCardContainer: {
        width: {md:"48%", lg:"100%"},
        // border: "3px solid pink",
        // "&:hover": { transform: "scale(1.1)", transition: "0.2s" },
        marginBottom: "13px",
        display: "flex",
        alignItems: 'flex-start',
        gap: '20px',
        cursor: "pointer"
    },

    thumbnailContainer: {

        // border: "3px solid red",
        position: "relative"
    },

    thubmnailImage: {
        width: "180px",
        height: "90px",
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
        bottom: 6,
        right: 7,
        bgcolor: "black",
        px: 0.6,
        color: "white",
        display: "inline",
        fontSize: "11px",
        borderRadius: "5px"
    },

    stackContainer: {
      
        pt: 0.5,
        alignItems: "start",
        //  border: "4px solid green",
        //marginTop: "10px"
    },

    videoContentContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // border: "2px solid yellow",
        flexGrow: "1",
        gap: '16px'
    },

    videoContentLeftContainer: {
        display: "flex",
        flexDirection: "column",
        gap: '2px',
        // border: '2px solid yellow',
        width: '180px'

    },

    title: {
        fontSize: '14px',
        color: "white"
    },

    author: {
        color: "#303030",
        fontSize: "13px"
    },

    moreVertIcon: {
        color: "#ffffff",
        cursor: "pointer"
    },

    viewsTimeContainer: {
        display: "flex"
    },

    views: {
        fontSize: "13px",
        color: "#303030"
    },

    uploadTime: {
        fontSize: "13px",
        color: "#303030"
    }
};

export default sideVideoCardStyles;
