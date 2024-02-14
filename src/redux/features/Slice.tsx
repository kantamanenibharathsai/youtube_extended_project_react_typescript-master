import { PayloadAction, createAsyncThunk, createSlice, } from "@reduxjs/toolkit";

export interface YouTubeVideo {
  contentDetails: {
    caption: string;
    contentRating: object;
    definition: string;
    dimension: string;
    duration: string;
    licensedContent: boolean;
    projection: string;
  };
  etag: string;
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    localized: {
      description: string;
      title: string;
    };
    publishedAt: string;
    tags: string[];
    thumbnails: {
      default: { height: number; url: string; width: number };
      high: { height: number; url: string; width: number };
      maxres: { height: number; url: string; width: number };
      medium: { height: number; url: string; width: number };
      standard: { height: number; url: string; width: number };
    };
    title: string;
  };
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}


interface Istate {
  currentVideoUrlId: string,
  youtubeVideosData: YouTubeVideo[]
}


export const initialState: Istate = {
  currentVideoUrlId: '',
  youtubeVideosData: []
};

export const fetchVideosData: any  = createAsyncThunk(
  "get/youtubevideos",
  async () => {
    console.log("aync func called");
    const option = {
      method: "GET",
      header: {
        Accept: "application/json",
        Authorization:
          "Bearer ya29.a0AfB_byAAlnmDlGfCppYEE2dmCSNdngq-mB7HRLjMka5A5Na4UhnXLiRaNSIKap61XJ_5g_SNSbE63Q7L_ktc_jQJAsUUZQ7OM8_uzH8_WLAojE3YS4xWFnfde3U1IDmSP4oO4uV6N0cyiL0GqRSdkMR-FOzzDXmGNVNGaCgYKAcYSARASFQHGX2MiEwsq7U9_sc07qqAaBhrLTA0171",
      },
    };
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyCjiFuxcalejeAVFh_HpjIXW9AsBSNJ49c",
      option
    );
    const jsonData = await response.json();
    return jsonData.items;
  }
);


export const youtubePlayer = createSlice({
  name: "Youtube",
  initialState,
  reducers: {
    currentVideo: (state, action: PayloadAction<string>) => {
      state.currentVideoUrlId = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideosData.fulfilled, (state, action) => {
      console.log("action",action.payload);
      state.youtubeVideosData = action.payload
    });
  }
});

export const { currentVideo } = youtubePlayer.actions;

export default youtubePlayer.reducer;