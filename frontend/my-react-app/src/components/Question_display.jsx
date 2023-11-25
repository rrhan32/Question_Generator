import React, { Component } from 'react';
import {useState,useEffect} from 'react';
import "./Qdisplay.css"
export default function Question(){
    const [question,setQuestion]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/question')
        .then((res)=>res.json())
        .then((json)=>{
          setQuestion(json);
        })
      },[]);

    return (
        <>
        <h1>Your Generated Questions</h1>
        <div className='questions-container'>
        {question.length > 0 ? (
            question.map((q, index) => (
                <div key={index} className='question-card'>
                  <p className="question-info"> 
                 <span style={{color:"red"}}>level:{q.dificulty} </span> -<span style={{color:'whitesmoke'}}> Q:  {q.question} </span></p>
                 <ul className='options-list'>
                    {q.options.map((option, index_2) => (
                    <li key={index_2}>{`Option ${String.fromCharCode(65 + index_2)}: ${option}`}</li>
                    ))}
                 </ul>
                </div>
            ))
            ) : (
            <p>Loading.....</p>
            )}

        </div>
        </>
    )

}