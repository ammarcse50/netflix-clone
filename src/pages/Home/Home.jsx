import Banner from "../../components/Banner";
import MovieRow from "../../components/MovieRow/MovieRow";
import endpoints from "../../services/MovieServices";

const Home = () => (
  <>
    <Banner />
    <MovieRow title={"Upcoming"} url={endpoints.upcoming} />
    <MovieRow title={"trending"} url={endpoints.trending} />
    <MovieRow title={"top-rated"} url={endpoints.topRated} />
    <MovieRow title={"comedy"} url={endpoints.comedy} />
    <MovieRow title={"popular"} url={endpoints.popular} />
  </>
);

export default Home;
