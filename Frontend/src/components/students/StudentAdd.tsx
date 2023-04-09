import {
	Autocomplete,
	Button,
	Card,
	CardActions,
	CardContent,
	IconButton,
	TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Student } from "../../models/Student";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { Group } from "../../models/Group";
import { debounce } from "lodash";

export const StudentAdd = () => {
	const navigate = useNavigate();

	const [student, setStudent] = useState<Student>({
		firstname: "",
		name: "",
		CNP: 1,
		favorite_colour: "",
		GroupId: 1, // TODO: also read the teacher_id from the form (NOT from the user!)
	});

	const [groups, setGroups] = useState<Group[]>([]);

	const fetchSuggestions = async (query: string) => {
		try {
			const response = await axios.get<Group[]>(
				`${BACKEND_API_URL}/groups/autocomplete?query=${query}/`
			);
			const data = await response.data;
			setGroups(data);
		} catch (error) {
			console.error("Error fetching suggestions:", error);
		}
	};

	const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 500), []);

	useEffect(() => {
		return () => {
			debouncedFetchSuggestions.cancel();
		};
	}, [debouncedFetchSuggestions]);

	const addStudent = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			await axios.post(`${BACKEND_API_URL}/students/`, student);
			navigate("/students");
		} catch (error) {
			console.log(error);
		}
	};

	const handleInputChange = (event: any, value: any, reason: any) => {
		console.log("input", value, reason);

		if (reason === "input") {
			debouncedFetchSuggestions(value);
		}
	};

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/students`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<form onSubmit={addStudent}>
						<TextField
							id="firstname"
							label="First Name"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setStudent({ ...student, firstname: event.target.value })}
						/>
						<TextField
							id="name"
							label="Name"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setStudent({ ...student, name: event.target.value })}
						/>

						<TextField
							id="favorite_colour"
							label="Favorite Color"
							variant="outlined"
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setStudent({ ...student, name: event.target.value })}
						/>

						<Autocomplete
							id="GroupId"
							options={groups}
							getOptionLabel={(option) => `${option.groupNr} - ${option.specialization}`}
							renderInput={(params) => <TextField {...params} label="Group" variant="outlined" />}
							filterOptions={(x) => x}
							onInputChange={handleInputChange}
							onChange={(event, value) => {
								if (value) {
									console.log(value);
									setStudent({ ...student, GroupId: value.id });
								}
							}}
						/>

						<Button type="submit" onClick={() => setStudent({ ...student, CNP: 1000000000000 + Math.floor(Math.random() * 9000000000000) })}>
							Add Student
						</Button>
					</form>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Container>
	);
};