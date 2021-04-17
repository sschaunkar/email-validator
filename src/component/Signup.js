import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link, RadioGroup, Radio, FormControl, FormLabel } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';

function Signup() {
    const [state, setState] = React.useState(false)
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 300,
        margin: '20px auto'
    }
    const avatarStyle = {
        backgroundColor: 'green'
    }
    const handleChange = (e) => {
        setState(!state)
    }
    const btnStyle = {
        margin: '8px 0 5px 0'
    }
    const radioStyle={
        margin:'15px auto 0 0'
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign Up</h2>
                    <p>Please fill this form to create an Account</p>
                </Grid>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        placeholder="Enter Name"
                        label="Name"
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        id="standard-basic"
                        placeholder="Enter Email"
                        label="Email"
                        type="email"
                        fullWidth
                        required
                    />
                    <FormControl component="fieldset" style={radioStyle}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                            <FormControlLabel
                                value="Male"
                                control={<Radio color="primary" />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="Female"
                                control={<Radio color="primary" />}
                                label="Female"
                            />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        id="standard-basic"
                        placeholder="Enter Phone Number"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        required
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        placeholder="Enter Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        required
                    />
                    <TextField
                        id="standard-password-input"
                        label="Confirm Password"
                        placeholder="Enter Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        required
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="I accept the terms and conditions"
                    />
                    <Button variant="contained" color="primary" fullWidth style={btnStyle}>
                        Sign Up
                    </Button>
                    <Typography>
                        Already Have an Account ?
                        <Link href="#">
                            {" "}Sign In
                        </Link>
                    </Typography>
                </form>
            </Paper >
        </Grid >
    )
}

export default Signup
