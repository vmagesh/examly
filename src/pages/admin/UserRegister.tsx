import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    InputAdornment,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Snackbar,
    Alert,
    Autocomplete,
    FormHelperText
} from '@mui/material';
import { useTheme } from '@mui/system';

// Sample data for Autocomplete
const schoolOptions = ['ABC High School', 'XYZ Academy', 'Global School'];
const cityOptions = ['New York', 'Los Angeles', 'Chicago'];
const stateOptions = ['California', 'New York', 'Texas'];
const roles = ['Student', 'Teacher', 'Admin'];

const UserRegister: React.FC = () => {
    const theme = useTheme();

    // State variables for form fields
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [emailId, setEmailId] = useState<string>('');
    const [mobNo, setMobNo] = useState<string>('+91');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [dob, setDob] = useState<string>('');
    const [school, setSchool] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [pincode, setPincode] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [parentEmailId, setParentEmailId] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [status, setStatus] = useState<string>('Active');
    const [premium, setPremium] = useState<boolean>(false);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    // Regex for validation
    const alphabeticRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const mobileNumberRegex = /^[+91][0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Validation functions
    const validateForm = () => {
        if (!firstName || !alphabeticRegex.test(firstName)) {
            setErrorMessage('First name should contain only alphabetic characters.');
            return false;
        }
        if (!lastName || !alphabeticRegex.test(lastName)) {
            setErrorMessage('Last name should contain only alphabetic characters.');
            return false;
        }
        if (!emailId || !emailRegex.test(emailId)) {
            setErrorMessage('Please enter a valid email address.');
            return false;
        }
        if (!mobileNumberRegex.test(mobNo)) {
            setErrorMessage('Please enter a valid mobile number.');
            return false;
        }
        if (!password || !passwordRegex.test(password)) {
            setErrorMessage(
                'Password should have at least 8 characters, 1 capital letter, 1 number, and 1 special character.'
            );
            return false;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return false;
        }
        if (!dob || new Date(dob) > new Date()) {
            setErrorMessage('Date of birth cannot be in the future.');
            return false;
        }
        if (!city || !alphabeticRegex.test(city)) {
            setErrorMessage('City should contain only alphabetic characters.');
            return false;
        }
        if (!pincode || isNaN(Number(pincode))) {
            setErrorMessage('Pincode should contain only numeric characters.');
            return false;
        }
        if (!state || !alphabeticRegex.test(state)) {
            setErrorMessage('State should contain only alphabetic characters.');
            return false;
        }
        if (parentEmailId && !emailRegex.test(parentEmailId)) {
            setErrorMessage('Parent email should be a valid email address.');
            return false;
        }
        if (!role) {
            setErrorMessage('Role is required.');
            return false;
        }
        return true;
    };

    // Submit handler
    const handleSubmit = () => {
        if (validateForm()) {
            setOpenSnackbar(true);
            setErrorMessage('');
            // Simulate form submission
            setTimeout(() => {
                alert('Profile Updated Successfully');
            }, 500);
        }
    };

    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom>
                Profile Page
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        error={!!errorMessage && !firstName}
                        helperText={errorMessage && !firstName ? 'First name is required' : ''}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        error={!!errorMessage && !lastName}
                        helperText={errorMessage && !lastName ? 'Last name is required' : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email ID"
                        variant="outlined"
                        fullWidth
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        error={!!errorMessage && !emailId}
                        helperText={errorMessage && !emailId ? 'Valid email is required' : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Mobile Number"
                        variant="outlined"
                        fullWidth
                        value={mobNo}
                        onChange={(e) => setMobNo(e.target.value)}
                        error={!!errorMessage && !mobNo}
                        helperText={errorMessage && !mobNo ? 'Valid mobile number is required' : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errorMessage && !password}
                        helperText={errorMessage && !password ? 'Password is required' : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!!errorMessage && password !== confirmPassword}
                        helperText={
                            password !== confirmPassword ? 'Passwords do not match' : ''
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Date of Birth"
                        variant="outlined"
                        fullWidth
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        error={!!errorMessage && !dob}
                        helperText={errorMessage && !dob ? 'Date of birth is required' : ''}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Autocomplete
                        options={schoolOptions}
                        renderInput={(params) => (
                            <TextField {...params} label="School" variant="outlined" fullWidth />
                        )}
                        value={school}
                        onChange={(e, newValue) => setSchool(newValue || '')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Autocomplete
                        options={cityOptions}
                        renderInput={(params) => (
                            <TextField {...params} label="City" variant="outlined" fullWidth />
                        )}
                        value={city}
                        onChange={(e, newValue) => setCity(newValue || '')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Pincode"
                        variant="outlined"
                        fullWidth
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        error={!!errorMessage && !pincode}
                        helperText={errorMessage && !pincode ? 'Valid pincode is required' : ''}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Autocomplete
                        options={stateOptions}
                        renderInput={(params) => (
                            <TextField {...params} label="State" variant="outlined" fullWidth />
                        )}
                        value={state}
                        onChange={(e, newValue) => setState(newValue || '')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Parent Email ID"
                        variant="outlined"
                        fullWidth
                        value={parentEmailId}
                        onChange={(e) => setParentEmailId(e.target.value)}
                        helperText={
                            parentEmailId && !emailRegex.test(parentEmailId)
                                ? 'Valid email is required'
                                : ''
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            label="Role"
                        >
                            {roles.map((role, idx) => (
                                <MenuItem key={idx} value={role}>
                                    {role}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>{errorMessage && !role && 'Role is required'}</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
                        Submit
                    </Button>
                </Grid>
            </Grid>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    Profile Updated Successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default UserRegister;
