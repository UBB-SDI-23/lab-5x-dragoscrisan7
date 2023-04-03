import { useEffect, useState } from "react";
import { Student } from "../models/Student";

export const StudentsShowAll = () => {
    const [students, setStudents] = useState([])

    useEffect(() =>{
        fetch("https://13.50.240.137:8000/students/")
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
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Name</th>
                        <th>CNP</th>
                        <th>Favorite color</th>
                        <th>GroupId</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student: Student, index) => (
                        <tr key={student.id}>
                            <td>{index}</td>
                            <td>{student.firstname}</td>
                            <td>{student.name}</td>
                            <td>{student.CNP}</td>
                            <td>{student.favorite_colour}</td>
                            <td>{student.GroupId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
  };

  
export default StudentsShowAll;