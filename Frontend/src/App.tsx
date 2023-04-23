import { useState } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { AppHome } from "./components/AppHome";
import { AppMenu } from "./components/AppMenu";
import { AllStudents } from "./components/students/AllStudents";
import { StudentDetails } from "./components/students/StudentDetails";
import { StudentDelete } from "./components/students/StudentDelete";
import { StudentAdd } from "./components/students/StudentAdd";
import { GroupDetails } from "./components/groups/GroupDetails";
import { StudentsFiltered } from "./components/students/StudentsFiltered";
import { StudentUpdate } from './components/students/StudentUpdate';

function App() {
  return (
    <React.Fragment>
      <Router>
        <AppMenu />
        <Routes>
        <Route path="/" element={<AppHome />} />
					<Route path="/students" element={<AllStudents />} />
					<Route path="/students/:studentId/details" element={<StudentDetails />} />
					<Route path="/students/:studentId/edit" element={<StudentUpdate />} />
					<Route path="/students/:studentId/delete" element={<StudentDelete />} />
					<Route path="/students/add" element={<StudentAdd />} />
          <Route path="groups/:groupId/details" element={<GroupDetails />} />
          <Route path="students/:studentId/studentsFiltered" element={<StudentsFiltered />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
