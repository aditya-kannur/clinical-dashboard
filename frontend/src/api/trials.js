const API_URL = 'http://localhost:32001/trials';

// GET all trials
export const getTrials = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to fetch trials');
    return await res.json();
  } catch (err) {
    console.error('Error fetching trials:', err);
    return [];
  }
};

// POST a new trial
export const addTrial = async (trial) => {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trial)
    });
    if (!res.ok) throw new Error('Failed to add trial');
    return await res.json();
  } catch (err) {
    console.error('Error adding trial:', err);
    throw err;
  }
};

// DELETE a trial by ID
export const deleteTrial = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete trial');
  } catch (err) {
    console.error('Error deleting trial:', err);
    throw err;
  }
};

// PUT (update) a trial by ID 
export const updateTrial = async (id, data) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to update trial');
    return await res.json();
  } catch (err) {
    console.error('Error updating trial:', err);
    throw err;
  }
};
