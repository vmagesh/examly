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
type UserGrowthData = {
    month: string;
    users: number;
    subscriptions: number;
};

type AreaWiseData = {
    name: string;
    users: number;
};

// Dummy data
const userGrowthData: UserGrowthData[] = [
    { month: "Jan", users: 400, subscriptions: 240 },
    { month: "Feb", users: 450, subscriptions: 300 },
    { month: "Mar", users: 500, subscriptions: 350 },
    { month: "Apr", users: 550, subscriptions: 400 },
    { month: "May", users: 600, subscriptions: 450 },
];

const areaWiseData: AreaWiseData[] = [
    { name: "City A", users: 500 },
    { name: "City B", users: 400 },
    { name: "City C", users: 350 },
    { name: "City D", users: 300 },
    { name: "City E", users: 200 },
];

const UserAnalytics: React.FC = () => {
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
                User Analytics Dashboard
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
                {/* User Growth Chart */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        User Growth ({timeframe})
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={userGrowthData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="users"
                                stroke="#8884d8"
                                name="Users"
                            />
                            <Line
                                type="monotone"
                                dataKey="subscriptions"
                                stroke="#82ca9d"
                                name="Subscriptions"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>

                {/* Area-wise Data */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Subscribers Area-wise ({areaType})
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={areaWiseData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="users" fill="#8884d8" name="Subscribers" />
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
                            <Typography variant="h6">Number of Users</Typography>
                            <Typography variant="h4">12,345</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, padding: 2 }}>
                            <Typography variant="h6">Subscriptions</Typography>
                            <Typography variant="h4">8,765</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default UserAnalytics;
