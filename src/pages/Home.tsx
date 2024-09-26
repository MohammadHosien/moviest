import { useParams } from "react-router-dom";
import Movies from "../components/Movies";

const Home = () => {
  const params=useParams()
  return (
    <>
      <Movies/>
    </>
  );
};

export default Home;
