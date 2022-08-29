import React from "react"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Key from '@mui/icons-material/Key';
import { Button, Paper } from "@mui/material";

const InputStyles = {
    ".MuiInputBase-formControl": {
        borderColor: '#fff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#fff',
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: '#fff',
    },
    '& .MuiInput-underline:hover': {
        borderColor: '#fff',
    },
    '& .MuiInput-root:hover:not(.Mui-disabled):before': {
        borderColor: '#fff'
    },
    "& input": {
        color: "#fff",
    },
    '& label.Mui-focused': {
        color: '#fff',
    },
    '& label': {
        color: '#fff',
    },
}

const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        username.length > 0 && loginUser(username, password)
    }
    
    return (
        <Paper
            style={{
                width: '30%',
                minWidth: 200,
                margin: 'auto',
                backgroundColor: '#170937',
                border: '1px solid white',
                borderRadius: 10,
                padding: 20,
                marginTop: 100,
            }}
        >
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display:'flex',
                        width: '100%',
                        height: '20vh',
                        flexDirection: 'column',
                        width: '50%',
                        margin: 'auto',
                        minWidth: 100,
                        justifyContent: 'space-around'
                    }}
                >
                    <FormControl variant="standard" sx={InputStyles}>
                        <InputLabel  htmlFor="username">
                            Usuário
                        </InputLabel>
                        <Input
                            id="username"
                            startAdornment={
                                <InputAdornment position="start">
                                <AccountCircle color='white' />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={InputStyles}>
                        <InputLabel htmlFor="password">
                            Senha
                        </InputLabel>
                        <Input
                            id="password"
                            type="password"
                            startAdornment={
                                <InputAdornment position="start">
                                <Key color='white'/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button color='white' variant='outlined' type='submit'>
                        Login
                    </Button>
                </div>
            </form>
        </Paper>
    )
}

export default Login