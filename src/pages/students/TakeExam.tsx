import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    LinearProgress,
    Grid,
    Paper,
    CircularProgress,
    Snackbar,
} from '@mui/material';
import { Alert } from '@mui/material';
import { useTheme } from '@mui/system';

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

const TakeExam: React.FC = () => {
    const theme = useTheme();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);
    const [isExamFinished, setIsExamFinished] = useState<boolean>(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Sample questions (In real scenario, fetch from server)
    const fetchQuestions = () => {
        const sampleQuestions: Question[] = [
            {
                id: 1,
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Madrid"],
                correctAnswer: "Paris",
            },
            {
                id: 2,
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correctAnswer: "4",
            },
            // Add more questions here
        ];
        setQuestions(sampleQuestions);
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAnswer(event.target.value);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer) {
            setAnswers([...answers, selectedAnswer]);
            setSelectedAnswer(null);
        }
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsExamFinished(true);
        }
    };

    const handleSubmitExam = () => {
        setOpenSnackbar(true);
        setTimeout(() => {
            // Simulate exam submission logic
            alert("Exam Submitted!");
        }, 500);
    };

    const getResults = () => {
        const correctAnswers = questions.filter((q, index) => q.correctAnswer === answers[index]);
        return `${correctAnswers.length} / ${questions.length} correct`;
    };

    const progressPercentage = (current: number, total: number) => {
        return Math.round((current / total) * 100);
    };

    return (
        <Box p={4}>
            <Typography variant="h4" align="center" gutterBottom>
                Take Your Exam
            </Typography>

            <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={12} sm={8}>
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        {isExamFinished ? (
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                    Exam Finished!
                                </Typography>
                                <Typography variant="body1" mb={2}>
                                    {getResults()}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmitExam}
                                    sx={{ width: '100%' }}
                                >
                                    Submit Exam
                                </Button>
                            </Box>
                        ) : (
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                    {questions[currentQuestionIndex]?.question}
                                </Typography>

                                <FormControl component="fieldset" fullWidth>
                                    <RadioGroup
                                        aria-label="options"
                                        name="question-options"
                                        value={selectedAnswer}
                                        onChange={handleAnswerChange}
                                    >
                                        {questions[currentQuestionIndex]?.options.map((option, index) => (
                                            <FormControlLabel
                                                key={index}
                                                value={option}
                                                control={<Radio />}
                                                label={option}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>

                                <Box mt={2}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={progressPercentage(currentQuestionIndex + 1, questions.length)}
                                        sx={{ marginBottom: 3 }}
                                    />
                                    <Box display="flex" justifyContent="space-between">
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => setIsExamFinished(true)}
                                        >
                                            Skip to End
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNextQuestion}
                                        >
                                            {currentQuestionIndex + 1 === questions.length ? "Finish Exam" : "Next Question"}
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Paper>
                </Grid>
            </Grid>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    Your exam has been successfully submitted!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default TakeExam;
