import { useEffect, useState } from "react";
import { Student } from "../models/Student";

export const StudentsShowAll = () => {
    const [students, setStudents] = useState([])

    useEffect(() =>{
        fetch("http://13.50.240.137:8000/students/")
            .then(res => res.json())
            .then((data) => setStudents(data));
    }, []);

    if (students.length === 0){
        return <div>No students.</div>
    }

    return (
        <div className="App">
            <h1>Students List</h1>
            <table>
                <tr>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Name</th>
                    <th>CNP</th>
                    <th>Favorite color</th>
                    <th>GroupId</th>
                </tr>
                {students.map((student: Student, index) => (
                    <tr>
                        <td>{index}</td>
                        <td>{student.firstname}</td>
                        <td>{student.name}</td>
                        <td>{student.CNP}</td>
                        <td>{student.favorite_colour}</td>
                        <td>{student.GroupId}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
  };

  
export default StudentsShowAll;