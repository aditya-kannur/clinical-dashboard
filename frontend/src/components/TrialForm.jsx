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
    if (!form.name || !form.phase || !form.location || !form.status) return;

    setIsSubmitting(true);
    try {
      const newTrial = await addTrial(form);
      onAdd(newTrial);
      setForm({ name: '', phase: '', location: '', status: '' });
    } catch (err) {
      console.error("Failed to add trial", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 border rounded w-full max-w-md">
      <input
        name="name"
        placeholder="Trial Name"
        value={form.name}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <input
        name="phase"
        placeholder="Phase"
        value={form.phase}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <input
        name="status"
        placeholder="Status"
        value={form.status}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <button
        type="submit"
        disabled={isSubmitting || !form.name || !form.phase || !form.location || !form.status}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Add Trial"}
      </button>
    </form>
  );
}
