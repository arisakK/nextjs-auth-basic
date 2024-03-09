"use client"
import React from 'react';
import { signIn } from "next-auth/react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Page ()  {
    const username = React.useRef<HTMLInputElement>(null)
    const password = React.useRef<HTMLInputElement>(null)

    const handelLogin = () => {
        signIn('credentials',{
            username: username.current?.value,
            password: password.current?.value,
            redirect: true,
            callbackUrl: '/'
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="usernama"
                        label="Username"
                        name="username"
                        autoFocus
                        inputRef={username}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        inputRef={password}
                    />
                </Box>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handelLogin}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
}

export default Page;