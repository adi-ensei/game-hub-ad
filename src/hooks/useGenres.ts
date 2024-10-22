import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const Genre = () => useData<Genre>("genres");
export default Genre;
