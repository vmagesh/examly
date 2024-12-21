import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    InputAdornment,
    IconButton,
    Avatar,
    Tooltip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Snackbar,
    Alert,
    Autocomplete,
    FormHelperText,
    Paper
} from '@mui/material';
import { Edit as EditIcon, PhotoCamera as PhotoIcon } from '@mui/icons-material';
import { useTheme } from '@mui/system';

// Sample data for Autocomplete
const schoolOptions = ['ABC High School', 'XYZ Academy', 'Global School'];
const cityOptions = ['New York', 'Los Angeles', 'Chicago'];
const stateOptions = ['California', 'New York', 'Texas'];
const roles = ['Student', 'Teacher', 'Admin'];

const ProfilePageView: React.FC = () => {
    const theme = useTheme();

    // State variables for profile data
    const [firstName, setFirstName] = useState<string>('John');
    const [lastName, setLastName] = useState<string>('Doe');
    const [emailId, setEmailId] = useState<string>('john.doe@example.com');
    const [mobNo, setMobNo] = useState<string>('+91 1234567890');
    const [dob, setDob] = useState<string>('1990-05-15');
    const [school, setSchool] = useState<string>('ABC High School');
    const [city, setCity] = useState<string>('New York');
    const [pincode, setPincode] = useState<string>('123456');
    const [state, setState] = useState<string>('California');
    const [parentEmailId, setParentEmailId] = useState<string>('parent@example.com');
    const [role, setRole] = useState<string>('Student');
    const [photo, setPhoto] = useState<string | null>(null);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    // Editable fields toggle function
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    // Photo upload handler
    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const photoUrl = URL.createObjectURL(event.target.files[0]);
            setPhoto(photoUrl);
        }
    };

    // Validation function for form submission (only necessary fields)
    const validateForm = () => {
        if (!emailId) {
            setErrorMessage('Email ID is required.');
            return false;
        }
        return true;
    };

    // Submit handler (just shows a success message for now)
    const handleSubmit = () => {
        if (validateForm()) {
            setOpenSnackbar(true);
            setErrorMessage('');
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

            <Paper elevation={3} sx={{ p: 4 }}>
                <Grid container spacing={3} alignItems="center">
                    {/* Profile Picture */}
                    <Grid item xs={12} md={3} display="flex" justifyContent="center">
                        <Avatar
                            alt="Profile Picture"
                            src={photo || '/default-avatar.png'}
                            sx={{ width: 120, height: 120, boxShadow: 2 }}
                        />
                        <Tooltip title="Change Photo" arrow>
                            <IconButton
                                component="label"
                                sx={{
                                    position: 'absolute',
                                    top: 85,
                                    left: 85,
                                    color: 'white',
                                    borderRadius: '50%',
                                }}
                            >
                                <PhotoIcon />
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={handlePhotoChange}
                                />
                            </IconButton>
                        </Tooltip>
                    </Grid>

                    {/* Profile Details */}
                    <Grid item xs={12} md={9}>
                        <Grid container spacing={2}>
                            {/* Editable Fields */}
                            {[
                                { label: 'First Name', value: firstName, setValue: setFirstName },
                                { label: 'Last Name', value: lastName, setValue: setLastName },
                                { label: 'Email', value: emailId, setValue: setEmailId },
                                { label: 'Mobile Number', value: mobNo, setValue: setMobNo },
                                { label: 'Date of Birth', value: dob, setValue: setDob, type: 'date' },
                                { label: 'Parent Email', value: parentEmailId, setValue: setParentEmailId },
                            ].map(({ label, value, setValue, type }, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="body1" sx={{ fontWeight: 600, width: '35%' }}>
                                            {label}:
                                        </Typography>
                                        {editMode ? (
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                                fullWidth
                                                type={type || 'text'}
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        ) : (
                                            <Typography variant="body1" sx={{ width: '50%' }}>
                                                {value}
                                            </Typography>
                                        )}
                                        <IconButton onClick={toggleEditMode}>
                                            <EditIcon />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            ))}

                            {/* School, City, State, Role */}
                            {[
                                { label: 'School', value: school, setValue: setSchool, options: schoolOptions },
                                { label: 'City', value: city, setValue: setCity, options: cityOptions },
                                { label: 'State', value: state, setValue: setState, options: stateOptions },
                                { label: 'Role', value: role, setValue: setRole, options: roles, isSelect: true },
                            ].map(({ label, value, setValue, options, isSelect }, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="body1" sx={{ fontWeight: 600, width: '35%' }}>
                                            {label}:
                                        </Typography>
                                        {editMode ? (
                                            isSelect ? (
                                                <FormControl fullWidth size="small">
                                                    <InputLabel>Role</InputLabel>
                                                    <Select
                                                        value={value}
                                                        onChange={(e) => setValue(e.target.value)}
                                                    >
                                                        {options.map((option) => (
                                                            <MenuItem key={option} value={option}>
                                                                {option}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                    <FormHelperText>Choose your role</FormHelperText>
                                                </FormControl>
                                            ) : (
                                                <Autocomplete
                                                    options={options}
                                                    value={value}
                                                    onChange={(e, newValue) => setValue(newValue || '')}
                                                    renderInput={(params) => <TextField {...params} size="small" />}
                                                    fullWidth
                                                />
                                            )
                                        ) : (
                                            <Typography variant="body1" sx={{ width: '50%' }}>
                                                {value}
                                            </Typography>
                                        )}
                                        <IconButton onClick={toggleEditMode}>
                                            <EditIcon />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <Box mt={4} textAlign="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{
                        borderRadius: 30,
                        paddingX: 5,
                        paddingY: 2,
                        fontSize: '16px',
                        boxShadow: 2,
                    }}
                >
                    Save Changes
                </Button>
            </Box>

            {/* Snackbar for error message */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success">
                    Profile updated successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ProfilePageView;
