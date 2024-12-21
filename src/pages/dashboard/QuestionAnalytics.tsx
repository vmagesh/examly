import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { SelectChangeEvent } from "@mui/material";

// Types for the data
type QuestionGrowthData = {
    month: string;
    added: number;
    deleted: number;
};

type AreaWiseData = {
    name: string;
    questions: number;
};

// Dummy data
const questionGrowthData: QuestionGrowthData[] = [
    { month: "Jan", added: 150, deleted: 20 },
    { month: "Feb", added: 200, deleted: 15 },
    { month: "Mar", added: 180, deleted: 10 },
    { month: "Apr", added: 210, deleted: 25 },
    { month: "May", added: 230, deleted: 20 },
];

const areaWiseData: AreaWiseData[] = [
    { name: "City A", questions: 500 },
    { name: "City B", questions: 400 },
    { name: "City C", questions: 350 },
    { name: "City D", questions: 300 },
    { name: "City E", questions: 200 },
];

const QuestionAnalytics: React.FC = () => {
    const [timeframe, setTimeframe] = useState<string>("Monthly");
    const [areaType, setAreaType] = useState<string>("City");

    // Handle dropdown changes with correct typing
    const handleTimeframeChange = (event: SelectChangeEvent<string>) => {
        setTimeframe(event.target.value);
    };

    const handleAreaTypeChange = (event: SelectChangeEvent<string>) => {
        setAreaType(event.target.value);
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Question Analytics Dashboard
            </Typography>

            {/* Timeframe and Area Filter */}
            <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                <Grid item xs={6} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Timeframe</InputLabel>
                        <Select
                            value={timeframe}
                            onChange={handleTimeframeChange}
                            label="Timeframe"
                        >
                            <MenuItem value="Monthly">Monthly</MenuItem>
                            <MenuItem value="Quarterly">Quarterly</MenuItem>
                            <MenuItem value="Yearly">Yearly</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Area Type</InputLabel>
                        <Select
                            value={areaType}
                            onChange={handleAreaTypeChange}
                            label="Area Type"
                        >
                            <MenuItem value="City">City</MenuItem>
                            <MenuItem value="Pin Code">Pin Code</MenuItem>
                            <MenuItem value="State">State</MenuItem>
                            <MenuItem value="School">School</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                {/* Question Growth Chart */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Questions Growth ({timeframe})
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={questionGrowthData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="added"
                                stroke="#8884d8"
                                name="Added"
                            />
                            <Line
                                type="monotone"
                                dataKey="deleted"
                                stroke="#ff7300"
                                name="Deleted"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>

                {/* Area-wise Data */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Questions Area-wise ({areaType})
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={areaWiseData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="questions" fill="#8884d8" name="Questions" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>

            {/* Additional Statistics */}
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Key Metrics
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, padding: 2 }}>
                            <Typography variant="h6">Total Questions</Typography>
                            <Typography variant="h4">12,345</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, padding: 2 }}>
                            <Typography variant="h6">Added This Month</Typography>
                            <Typography variant="h4">230</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, padding: 2 }}>
                            <Typography variant="h6">Deleted This Month</Typography>
                            <Typography variant="h4">20</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default QuestionAnalytics;
