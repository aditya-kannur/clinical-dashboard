import { useEffect, useState } from 'react';
import { getTrials, deleteTrial } from '../api/trials';
import TrialForm from '../components/TrialForm';
import TrialList from '../components/TrialList';

export default function Dashboard() {
  const [trials, setTrials] = useState([]);

  const fetchTrials = async () => {
    const data = await getTrials();
    setTrials(data);
  };

  const handleAdd = (trial) => {
    setTrials([trial, ...trials]);
  };

  const handleDelete = async (id) => {
    await deleteTrial(id);
    setTrials(trials.filter((t) => t._id !== id));
  };

  useEffect(() => {
    fetchTrials();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Clinical Trials Dashboard</h2>
      <TrialForm onAdd={handleAdd} />
      <TrialList trials={trials} onDelete={handleDelete} />
    </div>
  );
}
