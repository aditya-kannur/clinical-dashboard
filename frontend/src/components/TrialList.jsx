import { useState } from 'react';
import { updateTrial } from '../api/trials';

export default function TrialList({ trials, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (trial) => {
    setEditingId(trial._id);
    setEditedData(trial);
  };

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await updateTrial(editingId, editedData);
      setEditingId(null);
    } catch (err) {
      alert('Update failed');
    }
  };

  const handleCancel = () => setEditingId(null);

  if (!trials.length) return <p className="empty-message">No trials available.</p>;

  return (
    <ul className="trial-list">
      {trials.map((trial) => (
        <li key={trial._id} className="trial-item">
          {editingId === trial._id ? (
            <div className="trial-edit">
              <input name="name" value={editedData.name} onChange={handleChange} className="form-input" />
              <input name="phase" value={editedData.phase} onChange={handleChange} className="form-input" />
              <input name="location" value={editedData.location} onChange={handleChange} className="form-input" />
              <input name="status" value={editedData.status} onChange={handleChange} className="form-input" />
              <div className="button-group">
                <button onClick={handleSave} className="form-button">💾 Save</button>
                <button onClick={handleCancel} className="form-button cancel">Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <div className="trial-info">
                <strong>{trial.name}</strong>
                <p>Phase: {trial.phase} | Location: {trial.location} | Status: {trial.status}</p>
              </div>
              <div className="button-group">
                <button onClick={() => handleEdit(trial)} className="edit-btn">✏️ Edit</button>
                <button onClick={() => onDelete(trial._id)} className="delete-btn">🗑️ Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
