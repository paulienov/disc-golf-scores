import Hole from '../components/Hole';
import Scoreboard from '../components/Scoreboard';

const Home = () => {
  return (
    <div>
      <Hole holeNumber={1} />
      <Scoreboard />
    </div>
  );
};

export default Home;