import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, Button, MenuItem, Select, InputLabel, FormControl, FormHelperText, IconButton, RadioGroup, FormControlLabel, Radio, SelectChangeEvent } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const CreateExam: React.FC = () => {
    const [examData, setExamData] = useState({
        grade: '',
        subject: '',
        chapter: '',
        examType: '',
        testFormat: '',
        testTimer: '',
        testStartTime: null,
        negativeMarking: 'No',
        customTimer: 60,
        scheduleDate: '',
        testMode: 'Self Test',
        studentsEmails: [''],
        groupTest: false,
    });

    const [errors, setErrors] = useState<any>({});

    // Handle input changes for TextField
    const handleTextFieldChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setExamData({ ...examData, [name]: value });
    };

    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        const { name, value } = event.target;
        setExamData({ ...examData, [name]: value });
    };

    // Handle test mode change
    const handleTestModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExamData({ ...examData, testMode: event.target.value });
    };

    // Handle Negative Marking option
    const handleNegativeMarkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExamData({ ...examData, negativeMarking: event.target.value });
    };

    // Handle students' email change for group test
    const handleStudentEmailChange = (index: number, value: string) => {
        const updatedEmails = [...examData.studentsEmails];
        updatedEmails[index] = value;
        setExamData({ ...examData, studentsEmails: updatedEmails });
    };

    // Handle adding/removing student emails for group test
    const handleAddStudentEmail = () => {
        setExamData({ ...examData, studentsEmails: [...examData.studentsEmails, ''] });
    };

    const handleRemoveStudentEmail = (index: number) => {
        const updatedEmails = [...examData.studentsEmails];
        updatedEmails.splice(index, 1);
        setExamData({ ...examData, studentsEmails: updatedEmails });
    };

    // Handle schedule date validation
    const handleScheduleDateChange = (newDate: any) => {
        setExamData({ ...examData, scheduleDate: newDate });
    };

    const handleSubmit = () => {
        // Perform validation here
        const errors: any = {};
        if (!examData.grade) errors.grade = 'Grade is required';
        if (!examData.subject) errors.subject = 'Subject is required';
        if (!examData.chapter) errors.chapter = 'Chapter is required';
        if (!examData.testStartTime) errors.testStartTime = 'Test start time is required';
        if (examData.testMode === 'Group Test' && examData.studentsEmails.length === 0) {
            errors.studentsEmails = 'At least one student should be invited for group test';
        }
        setErrors(errors);

        // If no errors, submit the data
        if (Object.keys(errors).length === 0) {
            console.log('Exam Data:', examData);
            alert('Exam Created Successfully');
        }
    };

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>
                Create Exam
            </Typography>
            <Grid container spacing={2}>
                {/* Grade Selection */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Grade"
                        name="grade"
                        value={examData.grade}
                        onChange={handleTextFieldChange}
                        error={!!errors.grade}
                        helperText={errors.grade}
                    />
                </Grid>

                {/* Subject Selection */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={examData.subject}
                        onChange={handleTextFieldChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                    />
                </Grid>

                {/* Chapter Selection */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Chapter"
                        name="chapter"
                        value={examData.chapter}
                        onChange={handleTextFieldChange}
                        error={!!errors.chapter}
                        helperText={errors.chapter}
                    />
                </Grid>

                {/* Exam Type Selection */}
                <Grid item xs={12}>
                    <FormControl fullWidth error={!!errors.examType}>
                        <InputLabel>Exam Type</InputLabel>
                        <Select
                            value={examData.examType}
                            onChange={handleSelectChange}
                            name="examType"
                            label="Exam Type"
                        >
                            <MenuItem value="Competitive Exam">Competitive Exam</MenuItem>
                            <MenuItem value="Entrance Exam">Entrance Exam</MenuItem>
                        </Select>
                        {errors.examType && <FormHelperText>{errors.examType}</FormHelperText>}
                    </FormControl>
                </Grid>

                {/* Test Format */}
                <Grid item xs={12}>
                    <FormControl fullWidth error={!!errors.testFormat}>
                        <InputLabel>Test Format</InputLabel>
                        <Select
                            value={examData.testFormat}
                            onChange={handleSelectChange}
                            name="testFormat"
                            label="Test Format"
                        >
                            <MenuItem value="MCQ">MCQ</MenuItem>
                            <MenuItem value="Short Answer">Short Answer</MenuItem>
                        </Select>
                        {errors.testFormat && <FormHelperText>{errors.testFormat}</FormHelperText>}
                    </FormControl>
                </Grid>

                {/* Test Mode (Self Test or Group Test) */}
                <Grid item xs={12}>
                    <RadioGroup row value={examData.testMode} onChange={handleTestModeChange}>
                        <FormControlLabel value="Self Test" control={<Radio />} label="Self Test" />
                        <FormControlLabel value="Group Test" control={<Radio />} label="Group Test" />
                    </RadioGroup>
                </Grid>

                {/* Group Test - Invite Students */}
                {examData.testMode === 'Group Test' && (
                    <Grid item xs={12}>
                        <Typography variant="h6">Invite Students</Typography>
                        {examData.studentsEmails.map((email, index) => (
                            <Grid container spacing={1} alignItems="center" key={index}>
                                <Grid item xs={10}>
                                    <TextField
                                        fullWidth
                                        label={`Student ${index + 1} Email`}
                                        value={email}
                                        onChange={(e) => handleStudentEmailChange(index, e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton onClick={() => handleRemoveStudentEmail(index)}>
                                        <Remove />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        ))}
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleAddStudentEmail}
                            startIcon={<Add />}
                        >
                            Add Student
                        </Button>
                    </Grid>
                )}

                {/* Submit Button */}
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Create Exam
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CreateExam;
