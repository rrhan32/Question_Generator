
import {useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-cool-form";
import Question from './components/Question_display';
import React from 'react'
import "./style.scss";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user')
    .then((res)=>res.json())
    .then((json)=>{
      setUserData(json);
    })
  },[]);
  const [formData, setFormData] = useState({
    total_marks: "",
    easy: "",
    medium: "",
    hard: "",
    
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submitform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log(data);
  
      // Handle the server response as needed
      setFormData({
        total_marks: '',
        easy: '',
        medium: '',
        hard: '',
      });
  
      // Navigate only after the data is successfully posted
      navigate('/question_generator');
      
      // Log after successful navigation
      console.log('Form submitted with data:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    
    <div className="App">
       {/* <h1>Hello</h1> */}
       <h1>Welcome to the Questions Generator App</h1>
       <h1>Enter Your Preferences</h1>
      {/* <div>
        {userData?(
          <h1>{userData[0].message}</h1>
        ):(
          <h1>Welcome to the Quiz App</h1>
        )}
      </div> */}
{/* <form  noValidate>
      <input name="username" placeholder="Username" required />
      <input name="email" type="email" placeholder="Email" required />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        minLength={8}
      />
      <input type="submit" />
    </form> */}

       <form onSubmit={handleSubmit}>
        <input
          type="total_marks"
          name="total_marks"
          placeholder="Total Marks"
          value={formData.total_marks}
          onChange={handleInputChange}
          required
        />
      
      
     
        <input
          type="easy"
          name="easy"
          placeholder="Easy (% of total  marks)"
          value={formData.easy}
          onChange={handleInputChange}
          required
        />
      
      
        <input
          type="medium"
          name="medium"
          placeholder="Medium (% of total  marks)"
          value={formData.medium}
          onChange={handleInputChange}
          required
        />
      
     
        <input
          type="hard"
          name="hard"
          placeholder="Hard (% of total  marks)"
          value={formData.hard}
          onChange={handleInputChange}
          required
        />
     
      
      {/* <Link to="/question_generated"> */}
      /* <input type="submit"/>
      {/* </Link> */}
     </form> 
     
    </div>
   
  );
}

export default App;
