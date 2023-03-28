import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
 const AuthForm = styled(Box)(() => ({
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'sm',
    boxShadow: 'md',
     '.text':{
         fontSize: 24,
         fontWeight: 700
     },
     '.small-text':{
         opacity: 0.6,
         fontFamily: 14
     },
    '.MuiLink-root':{
        textAlign: 'end',
        cursor:'pointer'
    },
    '.MuiInputAdornment-root':{
        paddingRight:2
    },
    '.MuiIconButton-root':{
        borderRadius:5,

        height:25
    },
    '.MuiSvgIcon-root':{
        width: 20,
        height: 20,
        opacity: 0.5
    },
    '.MuiFormLabel-root':{
        marginBottom: 10,
        opacity: 0.9,
        fontFamily: 14
    },
     '.MuiOutlinedInput-root':{
         width:400
     },
        '.wrapper':{
            display:'flex',
            columnGap:10,
            '.MuiToggleButton-root':{
                height:44,
                width:44,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                mozBackgroundSize: 'cover',
                backgroundSize: 'cover',
            },

        }
    }));
export default AuthForm