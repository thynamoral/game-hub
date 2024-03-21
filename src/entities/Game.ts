import Genre from "./Genre";
import Platform from "./Platform";

export default interface Game {
  id: number;
  name: string;
  slug: number | string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}
