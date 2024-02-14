import { Box, Typography } from "@mui/material";
import searchItemStles from "./SearchItem.Styles";
import SearchIcon from '@mui/icons-material/Search';


const SearchItem = () => {

    return(
        <Box sx={searchItemStles.searchItem}>
            <SearchIcon sx={searchItemStles.searchIcon}/>
            <Typography sx={searchItemStles.searchText}>something</Typography>
        </Box>
    )
}


export default SearchItem