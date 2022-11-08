import { useState } from "react";
import StudentList from "../studentList/StudentList";
import { Input } from '@chakra-ui/react'


const FormHandling = () => {
    const [studentName, setStudentName] = useState("")
    const [studentClass, setStudentClass] = useState("")
    const [studentEmail, setStudentEmail] = useState("")
    const [studentRollNo, setStudentRollNo] = useState("")
    const [students, setStudents] = useState([])

    type newStudentType = {
        name: string,
        class: string,
        email: string,
        rollNo: string
    }
    const submitHandler = () => {
        if( !(studentName && studentClass && studentEmail && studentRollNo) ) {
            alert("Please Fill All The Required Fields")
        } else {
            const newStudentData: newStudentType = {
                name: studentName,
                class: studentClass,
                email: studentEmail,
                rollNo: studentRollNo
            }
    
            setStudents([...students, newStudentData])
    
            setStudentName("")
            setStudentClass("")
            setStudentEmail("")
            setStudentRollNo("")
    
            console.log(students);
        }

    }

    
  return (
    <div>
            
      <label htmlFor="">Name: </label>
      <input type="text" placeholder="Enter Student Name" value={studentName} onChange={ (e) => setStudentName(e.target.value)} /> 
      <br />
      <br />
      <label htmlFor="">Class: </label>
      <input type="text" placeholder="Enter Student Class" value={studentClass} onChange={ (e) => setStudentClass(e.target.value)}/> 
      <br />
      <br />
      <label htmlFor="">Email: </label>
      <input type="text" placeholder="Enter Student Email" value={studentEmail} onChange={ (e) => setStudentEmail(e.target.value)}/> 
      <br />
      <br />
      <label htmlFor="">Roll No: </label>
      <input type="text" placeholder="Enter Student Roll No" value={studentRollNo} onChange={ (e) => setStudentRollNo(e.target.value)}/>
      <br />
      <br />
      <button onClick={submitHandler}>Submit Data</button>
      <br />
      <br />
    
      <h2>Student List Shows Here</h2>
      <StudentList studentData={students}/>

    </div>
  )
}

export default FormHandling;
