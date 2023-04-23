import { Button, Card, CardActions, CardContent, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { Student } from "../../models/Student";
import { Group } from "../../models/Group";
import { BACKEND_API_URL } from "../../constants";

export const StudentsFiltered = () => {

    return (
        <Container>
            
        </Container>
    )

}