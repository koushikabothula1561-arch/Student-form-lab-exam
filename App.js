import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentForm from './StudentForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/studentform" element={<StudentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
