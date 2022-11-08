import { useState } from "react";
import StudentList from "../studentList/StudentList";
import { Input, Button } from '@chakra-ui/react'


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
      <Input type="text" placeholder="Enter Student Name" value={studentName} onChange={ (e) => setStudentName(e.target.value)}/>
      {/* <input type="text" placeholder="Enter Student Name" value={studentName} onChange={ (e) => setStudentName(e.target.value)} />  */}
      <br />
      <br />
      <label htmlFor="">Class: </label>
      <Input type="text" placeholder="Enter Student Class" value={studentClass} onChange={ (e) => setStudentClass(e.target.value)}/>
      {/* <input type="text" placeholder="Enter Student Class" value={studentClass} onChange={ (e) => setStudentClass(e.target.value)}/>  */}
      <br />
      <br />
      <label htmlFor="">Email: </label>
      <Input type="text" placeholder="Enter Student Email" value={studentEmail} onChange={ (e) => setStudentEmail(e.target.value)}/>
      {/* <input type="text" placeholder="Enter Student Email" value={studentEmail} onChange={ (e) => setStudentEmail(e.target.value)}/>  */}
      <br />
      <br />
      <label htmlFor="">Roll No: </label>
      <Input type="text" placeholder="Enter Student Roll No" value={studentRollNo} onChange={ (e) => setStudentRollNo(e.target.value)}/>
      {/* <input type="text" placeholder="Enter Student Roll No" value={studentRollNo} onChange={ (e) => setStudentRollNo(e.target.value)}/> */}
      <br />
      <br />
      <Button colorScheme='teal' size='lg' onClick={submitHandler}> Submit Data</Button>
      {/* <button onClick={submitHandler}>Submit Data</button> */}
      <br />
      <br />
    
      <h2>Student List Shows Here</h2>
      <StudentList studentData={students}/>

    </div>
  )
}

export default FormHandling;
