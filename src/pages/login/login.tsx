import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, Checkbox, FormControlLabel } from '@mui/material';

interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation check for email and password
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields');
            return;
        }

        // Replace this with your actual login logic (e.g., API call)
        setSuccessMessage('Login successful!');
        setError(null);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" component="h1" gutterBottom>
                    Login
                </Typography>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                name="rememberMe"
                                color="primary"
                            />
                        }
                        label={<Typography variant="body2">Remember me</Typography>}
                    />

                    {error && (
                        <Typography color="error" variant="body2" align="center" margin="normal">
                            {error}
                        </Typography>
                    )}

                    {successMessage && (
                        <Typography color="primary" variant="body2" align="center" margin="normal">
                            {successMessage}
                        </Typography>
                    )}

                    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                padding: '10px',
                                borderRadius: '25px',
                                textTransform: 'none',
                            }}
                        >
                            Login
                        </Button>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
