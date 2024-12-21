import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, Checkbox, FormControlLabel } from '@mui/material';

interface SignupFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
}

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<SignupFormData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
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

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!formData.agreeToTerms) {
            setError('You must agree to the terms and conditions');
            return;
        }

        // Replace this with your actual signup logic (e.g., API call)
        setSuccessMessage('Signup successful!');
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
                    Sign Up
                </Typography>

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

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

                    <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                name="agreeToTerms"
                                color="primary"
                            />
                        }
                        label={
                            <Typography variant="body2">
                                I agree to the{' '}
                                <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>
                                    Terms and Conditions
                                </a>
                            </Typography>
                        }
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
                            Sign Up
                        </Button>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default Signup;
