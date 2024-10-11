import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cffd4805d6404b058c1bbf0a41bfcd0c",
  },
});
