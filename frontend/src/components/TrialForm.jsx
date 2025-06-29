import { useState } from 'react';
import { addTrial } from '../api/trials';

export default function TrialForm({ onAdd }) {
  const [form, setForm] = useState({ name: '', phase: '', location: '', status: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTrial = await addTrial(form);
    onAdd(newTrial);
    setForm({ name: '', phase: '', location: '', status: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="phase" placeholder="Phase" value={form.phase} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
      <input name="status" placeholder="Status" value={form.status} onChange={handleChange} required />
      <button type="submit">Add Trial</button>
    </form>
  );
}
