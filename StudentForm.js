import React from 'react';

const StudentForm = () => (
  <form onSubmit={(e) => { e.preventDefault(); alert('Submitted!'); }}>
    <input type="text" placeholder="Name" required />
    <input type="number" placeholder="Age" required />
    <input type="text" placeholder="Class" required />
    <button type="submit">Submit</button>
  </form>
);

export default StudentForm;
