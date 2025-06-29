export default function TrialList({ trials, onDelete }) {
  return (
    <ul>
      {trials.map((trial) => (
        <li key={trial._id}>
          <strong>{trial.name}</strong> — {trial.phase}, {trial.location}, {trial.status}
          <button onClick={() => onDelete(trial._id)} style={{ marginLeft: '1rem' }}>
            ❌ Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
