import { useState } from 'react';
import { addTrial } from '../api/trials';

export default function TrialForm({ onAdd }) {
  const [form, setForm] = useState({ name: '', phase: '', location: '', status: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const newTrial = await addTrial(form);
      onAdd(newTrial);
      setForm({ name: '', phase: '', location: '', status: '' });
    } catch (err) {
      console.error('Add failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="trial-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Trial Name" value={form.name} onChange={handleChange} required className="form-input" />
      <input name="phase" placeholder="Phase" value={form.phase} onChange={handleChange} required className="form-input" />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required className="form-input" />
      <input name="status" placeholder="Status" value={form.status} onChange={handleChange} required className="form-input" />
      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Submitting...' : 'Add Trial'}
      </button>
    </form>
  );
}
