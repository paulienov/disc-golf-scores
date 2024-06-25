import { useStore } from '../state/useStore';

const Scoreboard = () => {
  const scores = useStore(state => state.scores);
  const averageScore = scores.reduce((acc, cur) => acc + cur, 0) / scores.length || 0;

  return (
    <div>
      <h2>Scoreboard</h2>
      {scores.map((score, index) => (
        <p key={index}>Hole {index + 1}: {score}</p>
      ))}
      <p>Average Score: {averageScore.toFixed(2)}</p>
    </div>
  );
};

export default Scoreboard;