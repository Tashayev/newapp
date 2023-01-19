import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Divider from "@mui/material/Divider";
import {Box, Grid, ListItemText} from "@mui/material";
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',

        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'top',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 5,
        marginTop: theme.spacing(0),
        minWidth: 550,
        minHeight:500,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '30px 30px',
        },
        '& .MuiMenuItem-root': {

            '& .MuiSvgIcon-root': {
                justifyContent: "space-between",
                fontSize: 14,
                "&:hover":{
                    color: "#2f80ed",
                    marginRight: theme.spacing(0),
                },
            },
            "&:hover":{
                color: "#2f80ed",
                background:"#fff",
            },".1":{
                display:"none"
            }

        },
        '& .MuiButton-root': {
            height:"70px",
            background:"#f2f2f2",
            color:"#333",
            width:"140px"
        },
    },
}));
export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box style={{height:"50px", }}
            // onMouseLeave={handlePopoverClose}
        >

            <Button
                sx={{height:"50px", display:"flex", justifyContent:"center"}}
                endIcon={<KeyboardArrowDownIcon />}
                // aria-owns={anchorEl ? "simple-menu" : undefined}
                // aria-haspopup="true"
                // onMouseOver={handlePopoverOpen}

            >
                Категории
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                // anchorEl={anchorEl}
                // open={Boolean(anchorEl)}
                // onClose={handlePopoverClose}
                // MenuListProps={{ onMouseLeave: handlePopoverClose }}
            >
                <Grid container
                >
                    <Grid item xs
                          >
                        <MenuItem onClick={handlePopoverClose} disableRipple className="1">
                            <ListItemText>Разработка</ListItemText>
                            <ArrowForwardIosIcon />
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="2">
                            <ListItemText>Дизайн</ListItemText>
                            <ArrowForwardIosIcon />
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="3">
                            <ListItemText>Маркетинг</ListItemText>
                            <ArrowForwardIosIcon />
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="4">
                            <ListItemText>Языковые курсы</ListItemText>
                            <ArrowForwardIosIcon />
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="5">
                            <ListItemText>Бизнес</ListItemText>
                            <ArrowForwardIosIcon />
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="6">
                            <ListItemText>Личностное развитие</ListItemText>
                            <ArrowForwardIosIcon />
                        </MenuItem>
                    </Grid>
                    <Divider orientation="vertical" flexItem>
                    </Divider>
                    <Grid item xs>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="web dev">
                            Веб-разработка
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="mob dev">
                            Мобильные приложения
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="lang">
                            Языки программирования
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="db">
                            База данных
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="test">
                            Тестировать ПО
                        </MenuItem>
                        <MenuItem onClick={handlePopoverClose} disableRipple className="dev">
                            Разработка ПО
                         </MenuItem>
                    </Grid>
                </Grid>
            </StyledMenu>
        </Box>
    );
}