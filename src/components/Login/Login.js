import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useState} from 'react';
// import axios from "axios";
// import { useHistory } from 'react-router';

const Login = () => {

    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    // const history=useHistory();

    const changeEmail= (event)=>{
        setEmail(event.target.value);
    }

    const changePassword= (event)=>{
        setPassword(event.target.value);
    }

    const onSubmit= ()=>{
        console.log(`email is ${email} and password is ${password}`);
        // axios.post("https://backend-fyp.herokuapp.com/api/frontend/login",{
        //     "email": email,
        //     "password":password
        // }).then(
        //     response=>{
        //         history.push('/dashboard');
        //     }
        // ).catch(error=>console.log(error));

    }
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' value={email} onChange={changeEmail} fullWidth required/><br/><br/>
                <TextField label='Password' placeholder='Enter password' value={password} onChange={changePassword} type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={onSubmit} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
 
export default Login;