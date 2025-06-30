import { useEffect, useState } from 'react';
import { getTrials, deleteTrial } from '../api/trials';
import TrialForm from '../components/TrialForm';
import TrialList from '../components/TrialList';

export default function Dashboard() {
  const [trials, setTrials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrials = async () => {
      try {
        const data = await getTrials();
        setTrials(data);
      } catch {
        setError('Failed to fetch trials.');
      } finally {
        setLoading(false);
      }
    };
    fetchTrials();
  }, []);

  const handleAdd = (trial) => setTrials(prev => [trial, ...prev]);

  const handleDelete = async (id) => {
    try {
      await deleteTrial(id);
      setTrials(prev => prev.filter(t => t._id !== id));
    } catch {
      alert('Delete failed');
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">🧪 Clinical Trials Dashboard</h1>
      {error && <p className="error-message">{error}</p>}
      <TrialForm onAdd={handleAdd} />
      {loading ? (
        <p className="loading">Loading trials...</p>
      ) : (
        <TrialList trials={trials} onDelete={handleDelete} />
      )}
    </div>
  );
}
