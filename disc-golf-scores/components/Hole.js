import { useStore } from '../state/useStore';

const Hole = ({ holeNumber }) => {
  const score = useStore(state => state.scores[holeNumber - 1]);
  const setScore = useStore(state => state.setScore);

  const handleScoreChange = (e) => {
    setScore(holeNumber - 1, parseInt(e.target.value));
  };

  return (
    <div>
      <h2>Hole {holeNumber}</h2>
      <input type="range" min="-4" max="4" value={score} onChange={handleScoreChange} />
      <p>Score: {score > 0 ? `+${score}` : score}</p>
    </div>
  );
};

export default Hole;