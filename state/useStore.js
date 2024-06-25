import create from 'zustand';

const useStore = create(set => ({
  scores: Array(18).fill(0), // Assume 18 holes
  setScore: (hole, value) => set(state => {
    const newScores = [...state.scores];
    newScores[hole] = value;
    return { scores: newScores };
  })
}));

export default useStore;