import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data: platforms } = useData<Platform>("/platforms/lists/parents");
  return { platforms };
};

export default usePlatforms;
