import React from 'react'
import './student.css'
export default function Student(props) {
  return (
    <div class="container">
        <h1 class="heading">Student Info</h1>
        <div class="box">
        <h2>Name: <span>{props.name}</span></h2>
        <h2>Branch: <span>{props.branch}</span></h2>
        <h2>Section: <span>{props.sec}</span></h2>
        <h2>Roll No.:<span> {props.roll}</span></h2>
        <h2>College: <span>{props.college}</span></h2>
        </div>
    </div>
  )
}
