import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormHelperText, Box, Grid, Typography, IconButton } from '@mui/material';
import { FileUpload } from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material';

interface QuestionData {
    questionType: string;
    answerFormat: string;
    question: string;
    choices: string[];
    answer: string;
    subject: string;
    grade: string;
    chapter: string;
    difficultyLevel: string;
}

const AddQuestion: React.FC = () => {
    const [questionData, setQuestionData] = useState<QuestionData>({
        questionType: '',
        answerFormat: '',
        question: '',
        choices: ['', '', '', ''],
        answer: '',
        subject: '',
        grade: '',
        chapter: '',
        difficultyLevel: '',
    });

    const [file, setFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<any>({});
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    // Handle input changes for TextField
    const handleTextFieldChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setQuestionData((prev) => ({
            ...prev,
            [name as keyof QuestionData]: value,
        }));
    };

    // Handle input changes for Select
    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        const { name, value } = event.target;
        setQuestionData((prev) => ({
            ...prev,
            [name as keyof QuestionData]: value,
        }));
    };

    // Handle file upload
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
            setIsFileUploaded(true);
        }
    };

    // Validate form data
    const validate = (): boolean => {
        const newErrors: any = {};

        if (!questionData.questionType) newErrors.questionType = 'Question Type is required';
        if (!questionData.answerFormat) newErrors.answerFormat = 'Answer format is required';
        if (!questionData.question) newErrors.question = 'Question is required';
        if (questionData.questionType === 'MCQ' && questionData.choices.filter(choice => choice).length < 2) {
            newErrors.choices = 'At least 2 choices are required for MCQ';
        }
        if (!questionData.subject) newErrors.subject = 'Subject is required';
        if (!questionData.grade) newErrors.grade = 'Grade is required';
        if (!questionData.chapter) newErrors.chapter = 'Chapter is required';
        if (!questionData.difficultyLevel) newErrors.difficultyLevel = 'Difficulty Level is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = () => {
        if (validate()) {
            console.log('Form data:', questionData);
            // Mock save function, replace with actual DB save logic
            alert('Question saved successfully');
        }
    };

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>Add Question</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth error={!!errors.questionType}>
                        <InputLabel>Question Type</InputLabel>
                        <Select
                            value={questionData.questionType}
                            onChange={handleSelectChange}
                            name="questionType"
                            label="Question Type"
                        >
                            <MenuItem value="MCQ">MCQ</MenuItem>
                            <MenuItem value="TrueFalse">True/False</MenuItem>
                            <MenuItem value="ShortAnswer">Short Answer</MenuItem>
                        </Select>
                        {errors.questionType && <FormHelperText>{errors.questionType}</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth error={!!errors.answerFormat}>
                        <InputLabel>Answer Format</InputLabel>
                        <Select
                            value={questionData.answerFormat}
                            onChange={handleSelectChange}
                            name="answerFormat"
                            label="Answer Format"
                        >
                            <MenuItem value="Text">Text</MenuItem>
                            <MenuItem value="Numeric">Numeric</MenuItem>
                        </Select>
                        {errors.answerFormat && <FormHelperText>{errors.answerFormat}</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="question"
                        label="Enter Question"
                        value={questionData.question}
                        onChange={handleTextFieldChange}
                        error={!!errors.question}
                        helperText={errors.question}
                    />
                </Grid>

                {questionData.questionType === 'MCQ' && (
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {questionData.choices.map((choice, index) => (
                                <Grid item xs={6} key={index}>
                                    <TextField
                                        fullWidth
                                        label={`Choice ${index + 1}`}
                                        value={choice}
                                        onChange={(e) => {
                                            const newChoices = [...questionData.choices];
                                            newChoices[index] = e.target.value;
                                            setQuestionData({ ...questionData, choices: newChoices });
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                )}

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Answer"
                        name="answer"
                        value={questionData.answer}
                        onChange={handleTextFieldChange}
                        error={!!errors.answer}
                        helperText={errors.answer}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={questionData.subject}
                        onChange={handleTextFieldChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Grade"
                        name="grade"
                        value={questionData.grade}
                        onChange={handleTextFieldChange}
                        error={!!errors.grade}
                        helperText={errors.grade}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Chapter"
                        name="chapter"
                        value={questionData.chapter}
                        onChange={handleTextFieldChange}
                        error={!!errors.chapter}
                        helperText={errors.chapter}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Difficulty Level"
                        name="difficultyLevel"
                        value={questionData.difficultyLevel}
                        onChange={handleTextFieldChange}
                        error={!!errors.difficultyLevel}
                        helperText={errors.difficultyLevel}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        component="label"
                        startIcon={<FileUpload />}
                    >
                        Upload Question File
                        <input
                            type="file"
                            hidden
                            accept=".csv, .xls, .json"
                            onChange={handleFileChange}
                        />
                    </Button>
                    {isFileUploaded && <Typography variant="body2">File uploaded: {file?.name}</Typography>}
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddQuestion;
