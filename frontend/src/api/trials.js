const API_URL = 'http://localhost:32001/trials';

export const getTrials = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addTrial = async (trial) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trial)
  });
  return res.json();
};

export const deleteTrial = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};

export const updateTrial = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};
