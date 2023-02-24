import * as React from 'react';
import {Box,  FormControl, FormLabel,  Link, Typography} from "@mui/material";
import {Input} from "@mui/joy";
import Button from '@mui/joy/Button';

const Auth = () => {
    return (
        <Box
            sx={{
                width: 300,
                mx: 'auto', // margin left & right
                my: 4, // margin top & botom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
            }}
        >
            <Typography sx={{fontWeight:"bold"}}>Войти как ученик</Typography>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    // html input attribute
                    size="md"
                    type="login"
                    placeholder="johndoe@email.com"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                    // html input attribute
                    name="email"
                    type="email"
                    placeholder="password"
                />
            </FormControl>

            <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
            <Typography
                endDecorator={<Link >Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
            >
                Don&apos;t have an account?
            </Typography>
        </Box>
    );
};

export default Auth;