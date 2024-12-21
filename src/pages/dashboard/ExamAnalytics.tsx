import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    TextField,
    Paper,
} from "@mui/material";
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { SelectChangeEvent } from "@mui/material";

// Sample data
const subjectWiseData = [
    { subject: "Math", correct: 80, incorrect: 20 },
    { subject: "Science", correct: 70, incorrect: 30 },
    { subject: "English", correct: 90, incorrect: 10 },
];

const chapterWiseData = [
    { chapter: "Algebra", score: 85 },
    { chapter: "Geometry", score: 70 },
    { chapter: "Physics", score: 60 },
    { chapter: "Chemistry", score: 75 },
];

const percentileComparisonData = [
    { category: "Platform Users", percentile: 85 },
    { category: "City", percentile: 90 },
    { category: "School", percentile: 95 },
];

const COLORS = ["#8884d8", "#ff7300"];

const ExamAnalytics: React.FC = () => {
    const [filter, setFilter] = useState<string>("Monthly");
    const [userInput, setUserInput] = useState<string>("");

    const handleFilterChange = (event: SelectChangeEvent<string>) => {
        setFilter(event.target.value);
    };

    const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const generateReport = () => {
        console.log("Generating report for:", userInput);
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Exam Analytics Dashboard
            </Typography>

            {/* Filters */}
            <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                <Grid item xs={6} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Timeframe</InputLabel>
                        <Select value={filter} onChange={handleFilterChange} label="Timeframe">
                            <MenuItem value="Monthly">Monthly</MenuItem>
                            <MenuItem value="Quarterly">Quarterly</MenuItem>
                            <MenuItem value="Yearly">Yearly</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                    <TextField
                        fullWidth
                        label="Custom Input (e.g., Chapter, Subject)"
                        value={userInput}
                        onChange={handleUserInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button variant="contained" onClick={generateReport}>
                        Generate Report
                    </Button>
                </Grid>
            </Grid>

            {/* Main Analytics */}
            <Grid container spacing={4}>
                {/* Correct vs. Incorrect Pie Chart */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Correct vs. Incorrect Answers
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                dataKey="value"
                                data={[
                                    { name: "Correct", value: 240 },
                                    { name: "Incorrect", value: 60 },
                                ]}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                            >
                                {COLORS.map((color, index) => (
                                    <Cell key={`cell-${index}`} fill={color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>

                {/* Subject-wise Bar Chart */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Subject-wise Performance
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={subjectWiseData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="subject" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="correct" fill="#8884d8" name="Correct" />
                            <Bar dataKey="incorrect" fill="#ff7300" name="Incorrect" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>

                {/* Chapter-wise Line Chart */}
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" gutterBottom>
                        Chapter-wise Performance
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chapterWiseData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="chapter" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="score" stroke="#8884d8" name="Score" />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>

                {/* Percentile Comparison */}
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" gutterBottom>
                        Percentile Comparison
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={percentileComparisonData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="percentile" fill="#82ca9d" name="Percentile" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>

            {/* Insights/Suggestions */}
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Suggestions and Insights
                </Typography>
                <Paper sx={{ padding: 2 }}>
                    <Typography variant="body1">
                        - Focus more on Physics as the performance is below average.{" "}
                    </Typography>
                    <Typography variant="body1">
                        - High percentile in the school category; aim to maintain it.
                    </Typography>
                    <Typography variant="body1">
                        - Consider revising Algebra chapters for better results.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default ExamAnalytics;
