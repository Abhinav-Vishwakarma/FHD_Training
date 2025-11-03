import './App.css'
import Student from './components/Student'
function App() {
  const student = [{
    name:"Abhinav", 
    branch :"CSE AIML" ,
    sec : "B" ,
    roll : "2300321530006" ,
    college : "ABES Engineering college",
    img: "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
  },
  {
    name:"Dheeraj", 
    branch :"CSE AIML" ,
    sec : "B" ,
    roll : "2300321530056" ,
    college : "ABES Engineering college",
    img: "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
  },
]
  return (
    <>
    {/* <Student props = {student} /> */}
    {
      student.map((ele, idx) =>(
        <Student props = {ele} key = {idx}/>
      ))
    }
    </>
  )
}

export default App
