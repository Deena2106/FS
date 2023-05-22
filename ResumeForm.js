import React, { useState } from 'react';
import ResumePreview from './ResumePreview';

function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // Add more fields for education, work experience, skills, etc.
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, generate the resume, etc.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        
        {/* Add more form fields for education, work experience, skills, etc. */}
        
        <button type="submit">Generate Resume</button>
      </form>
      
      <ResumePreview formData={formData} />
    </div>
  );
}

export default ResumeForm;

// components/ResumePreview.js
