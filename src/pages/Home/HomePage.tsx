import { Box } from "@mui/material";
import homePageStyles from "./HomePageStyles"
import Navbar from "../../components/navbar/Navbar";
import HomeVideoCard from "../../components/home_video_card/HomeVideoCard";
import userHoc from "../../utils/UserHoc";
import { useEffect } from "react";
import { fetchVideosData } from "../../redux/features/Slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { YouTubeVideo } from "../../redux/features/Slice"
import SearchItem from "../../components/search_item/SearchItem";
import { Link } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch()
    const youtubeData: YouTubeVideo[] = useSelector(
        (state: RootState) => state.player.youtubeVideosData
    );

    useEffect(() => {
        dispatch(fetchVideosData())
    }, [])

    return (
        <Box>
            <Navbar />
            <Box sx={homePageStyles.homeChildContainer}>
                <Box sx={homePageStyles.homePageVideosContainer}>
                    {youtubeData.map(eachVideoObject => (
                        <Link to={`/videoplayer/${eachVideoObject.id}`}>
                        <HomeVideoCard key={eachVideoObject.id} eachVideoObject={eachVideoObject} />
                        </Link>
                    ))}
                </Box>
                {/* <Box sx={homePageStyles.searchList}> */}
                    {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((each) => (<SearchItem key={each}/>))} */}
                {/* </Box> */}
            </Box>
        </Box>
    )

}


export default userHoc(Home)
