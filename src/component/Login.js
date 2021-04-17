import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';


function Login() {
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
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        placeholder="Enter Email"
                        label="Email Address"
                        type="email"
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember Me"
                    />
                    <Button variant="contained" color="primary" fullWidth style={btnStyle}>
                        Sign In
                    </Button>
                    <Typography>
                        <Link href="#">
                            Forgot Password
                        </Link>
                    </Typography>
                    <Typography>
                        Don't have an Account ?
                        <Link href="#">
                            {" "}Sign Up
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login

