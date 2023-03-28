import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
const YellowButton = styled(Button)(() => ({
    color:'#fff',
    backgroundColor: '#ff9500',
    textTransform:'none',
    fontSize: 16,
    fontWeight: 500,
    padding:'10px 0',
    '&:hover': {
        backgroundColor: '#fd7e14',
    },
}));
export default YellowButton;