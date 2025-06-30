export default function TrialList({ trials, onDelete }) {
  if (!trials.length) {
    return <p className="p-4 text-gray-500">No trials available.</p>;
  }

  return (
    <ul className="space-y-3 p-4">
      {trials.map((trial) => (
        <li
          key={trial._id}
          className="border rounded p-3 flex justify-between items-center"
        >
          <div>
            <p className="font-bold">{trial.name}</p>
            <p className="text-sm text-gray-600">
              Phase: {trial.phase} | Location: {trial.location} | Status: {trial.status}
            </p>
          </div>
          <button
            onClick={() => onDelete(trial._id)}
            className="text-red-500 hover:underline"
          >
            ❌ Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
