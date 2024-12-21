import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

// Sample Data
const studentData = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 91 },
];

const pastExams = [
    { name: "Math Exam", date: "2024-01-15" },
    { name: "Science Exam", date: "2024-02-10" },
];

const futureExams = [
    { name: "English Exam", date: "2024-03-20" },
    { name: "History Exam", date: "2024-04-15" },
];

const StudentAnalytics: React.FC = () => {
    const [groupName, setGroupName] = useState<string>("");
    const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

    const handleGroupNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGroupName(event.target.value);
    };

    const handleStudentSelection = (event: SelectChangeEvent<string[]>) => {
        setSelectedStudents(event.target.value as string[]);
    };

    const createGroupTest = () => {
        console.log("Group Test Created:", groupName, selectedStudents);
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Student Analytics Dashboard
            </Typography>

            {/* Student List */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6" gutterBottom>
                    List of Students
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Student Name</TableCell>
                                <TableCell>Marks</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {studentData.map((student, index) => (
                                <TableRow key={index}>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.marks}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* Past and Future Exams */}
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Past Exams
                    </Typography>
                    <Paper sx={{ padding: 2 }}>
                        {pastExams.map((exam, index) => (
                            <Typography key={index}>
                                {exam.name} - {exam.date}
                            </Typography>
                        ))}
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Future Exams
                    </Typography>
                    <Paper sx={{ padding: 2 }}>
                        {futureExams.map((exam, index) => (
                            <Typography key={index}>
                                {exam.name} - {exam.date}
                            </Typography>
                        ))}
                    </Paper>
                </Grid>
            </Grid>

            {/* Create Group Test/Campaign */}
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Create Group Test/Campaign
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Group Name"
                            value={groupName}
                            onChange={handleGroupNameChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel>Select Students</InputLabel>
                            <Select
                                multiple
                                value={selectedStudents}
                                onChange={handleStudentSelection}
                                renderValue={(selected) => selected.join(", ")}
                            >
                                {studentData.map((student, index) => (
                                    <MenuItem key={index} value={student.name}>
                                        {student.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={createGroupTest}>
                            Create Group Test
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default StudentAnalytics;
