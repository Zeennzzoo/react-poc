import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    text: "Qual é a capital da França?",
    type: "multiple",
    options: ["Paris", "Londres", "Berlim", "Madri", "Lisboa"],
    correct: "Paris",
  },
  {
    id: 2,
    text: "Qual é a fórmula química da água?",
    type: "multiple",
    options: ["H2O", "CO2", "O2", "NaCl", "CH4"],
    correct: "H2O",
  },
  {
    id: 3,
    text: "O Sol é uma estrela?",
    type: "trueFalse",
    options: ["Sim", "Não"],
    correct: "Sim",
  },
  {
    id: 4,
    text: "A Terra é plana?",
    type: "trueFalse",
    options: ["Sim", "Não"],
    correct: "Não",
  },
];

function App() {
  const [formData, setFormData] = useState({ name: '', matricula: '' });
  const [responses, setResponses] = useState({});
  const [feedback, setFeedback] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOptionChange = (questionId, option) => {
    const question = questions.find(q => q.id === questionId);
    if (question.correct === option) {
      setResponses({ ...responses, [questionId]: "Correto!" });
    } else {
      setResponses({ ...responses, [questionId]: "Incorreto. Tente novamente." });
    }
    setFeedback(responses[questionId]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do questionário
    alert('Questionário enviado!');
  };

  return (
    <div className="App">
      <h1>Questionário</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Matrícula:</label>
          <input
            type="text"
            name="matricula"
            value={formData.matricula}
            onChange={handleInputChange}
            required
          />
        </div>
        {questions.map((question) => (
          <div key={question.id} className="question">
            <p>{question.text}</p>
            {question.options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`q${question.id}-o${index}`}
                  name={`q${question.id}`}
                  value={option}
                  onChange={() => handleOptionChange(question.id, option)}
                />
                <label htmlFor={`q${question.id}-o${index}`}>{option}</label>
              </div>
            ))}
            <p className="feedback">{responses[question.id]}</p>
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;