import { useState } from "react";
import StudentList from "../studentList/StudentList";
import { Input, Button } from '@chakra-ui/react'
import Link from 'next/link';
import { useToast } from '@chakra-ui/react';


const FormHandling = () => {
    const [studentName, setStudentName] = useState("")
    const [studentClass, setStudentClass] = useState("")
    const [studentEmail, setStudentEmail] = useState("")
    const [studentRollNo, setStudentRollNo] = useState("")
    const [students, setStudents] = useState([])
    const [showUpdate, setShowUpdate] = useState(false)
    const [updateIndex, setUpdateIndex] = useState('')

    const toast = useToast()

    type newStudentType = {
        name: string,
        class: string,
        email: string,
        rollNo: string,
        showUpdateBtn? : boolean
    }
    const submitHandler = () => {
        if( !(studentName && studentClass && studentEmail && studentRollNo) ) {
          toast({
            position: 'top',
            title: `Please Fill All The Required Fields`,
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
        } else {
            const newStudentData: newStudentType = {
                name: studentName,
                class: studentClass,
                email: studentEmail,
                rollNo: studentRollNo,
                showUpdateBtn : showUpdate
            }
            
            setStudents([...students, newStudentData])
            setStudentName("")
            setStudentClass("")
            setStudentEmail("")
            setStudentRollNo("")

            

            toast({
              position: 'top',
              title: `Student Added Successfully , Total Students are : ${students.length+1} `,
              status: 'success',
              duration: 4000,
              isClosable: true,
            })
    
        }
        
    }

    const editHandler = (Index) => {
      const updateStudentData = [...students]
      setStudentName(updateStudentData[Index].name)
      setStudentClass(updateStudentData[Index].class)
      setStudentEmail(updateStudentData[Index].email)
      setStudentRollNo(updateStudentData[Index].rollNo)
      setShowUpdate(true)
      setUpdateIndex(Index)    
    }

    const updateHandler = ()=> {
      const updateStudentData = [...students]
      updateStudentData[updateIndex].name = studentName
      updateStudentData[updateIndex].class = studentClass
      updateStudentData[updateIndex].email = studentEmail
      updateStudentData[updateIndex].rollNo = studentRollNo

      setStudents([...updateStudentData])

      setStudentName("")
      setStudentClass("")
      setStudentEmail("")
      setStudentRollNo("")

      setShowUpdate(false)
      setUpdateIndex('')

      toast({
        position: 'top',
        title: `Student Data Updated`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    }

    const studentDelete = (studentRollNo) => {
      const updateStudentData = [...students]
      const result = updateStudentData.filter( student => student.rollNo !== studentRollNo  )
      setStudents(result)
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
      {showUpdate ? <Button colorScheme='teal' size='lg' onClick={updateHandler}> Update Data</Button> 
      : <Button colorScheme='teal' size='lg' onClick={submitHandler}> Submit Data</Button> }

      <Link href="/"> Go to Counter App</Link>
      {/* <button onClick={submitHandler}>Submit Data</button> */}
      <br />
      <br />
    
      <h2>Student List Shows Here</h2> 
      Total No of Students : <b>{students.length}</b>
      <StudentList studentData={students} upDateStudnData={editHandler} studentDelete={studentDelete}/>

    </div>
  )
}

export default FormHandling;




