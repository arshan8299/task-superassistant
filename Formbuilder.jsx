import React, { useState } from 'react';
import axios from "axios";

function FormBuilder() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    questions: [],
  });

  const addQuestion = () => {
    const newQuestion = {
      type: 'text', // You can use a dropdown or radio buttons to select question type
      title: '',
      image: '',
    };
    setForm({ ...form, questions: [...form.questions, newQuestion] });
  };

  const handleQuestionChange = (questionIndex, key, value) => {
    const updatedQuestions = [...form.questions];
    updatedQuestions[questionIndex][key] = value;
    setForm({ ...form, questions: updatedQuestions });
  };

  const removeQuestion = (questionIndex) => {
    const updatedQuestions = [...form.questions];
    updatedQuestions.splice(questionIndex, 1);
    setForm({ ...form, questions: updatedQuestions });
  };

  const saveForm = () => {
    const res=axios.post("http://localhost/api/v1/saveform",{title,desc});
   
    console.log('Form Data to be saved:', form);
  };

  return (
    <div>
      <h2>Form Builder</h2>
      <input
        type="text"
        placeholder="Form Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Form Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      {form.questions.map((question, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Question Title"
            value={question.title}
            onChange={(e) => handleQuestionChange(index, 'title', e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            value={question.image}
            onChange={(e) => handleQuestionChange(index, 'image', e.target.value)}
          />

          <button onClick={() => removeQuestion(index)}>Remove</button>
        </div>
      ))}

      <button onClick={addQuestion}>Add Question</button>
      <button onClick={saveForm}>Save Form</button>
    </div>
  );
}

export default FormBuilder;

