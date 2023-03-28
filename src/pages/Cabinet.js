import React, {useState} from 'react';
import {
    Box, Button,
    FormControl,
    FormLabel,
    Link,
    OutlinedInput,
    Table,
    TableCell,
    TableContainer,
    Typography
} from "@mui/material";
import Divider from '@mui/material/Divider';
import YellowButton from "../components/style/YellowButton";
import AuthForm from "../components/style/AuthForm";
import {styled} from "@mui/material/styles";
import { Tabs, Tab} from '@mui/material';
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import {CABINET_ROUTE, STUDENT_ROUTE} from "../utils/consts";
import Paper from '@mui/material/Paper';
const Student = () => {
    const [inputValues, setInputValues] = useState({ name: '',surname:'', email: '',});
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }
    const isDisabled = Object.values(inputValues).some((value) => value === '');
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const nav = useNavigate()
    const header = ['МОИ АККАУНТ', 'МОИ КУРСЫ']
    return (
        <Content >
            <Box className='sub-content'>
                <MyTabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}

                    >
                    <MyTab
                        onClick={()=>nav(CABINET_ROUTE)}
                        label='Мои аккаунт'
                        {...a11yProps(0)}

                        disableRipple
                    />
                    <MyTab
                        onClick={()=>nav(STUDENT_ROUTE)}
                        {...a11yProps(1)}
                        label='Мои курсы'
                        disableRipple
                    />
                    <MyTab label='Выйти'
                           disableRipple
                    />
                </MyTabs>
                <Divider
                    orintation='vertical'
                    flexItem
                    sx={{height:850,borderWidth:1}}
                />
                <Box>
                    <Box sx={{p:'35px'}}>
                        <Typography sx={{    fontSize: '24px', fontWeight: 700}}>
                            {header[value]}
                        </Typography>
                    </Box>
                    <Divider
                        flexItem
                        sx={{width:900,borderWidth:1}}
                    />
                    <TabPanel
                        value={value} index={0}
                    >
                       <Box sx={{display:'flex', }}>
                           <AuthForm sx={{gap: 2, px:3}}>
                               <FormControl>
                                   <FormLabel>Имя</FormLabel>
                                   <OutlinedInput
                                       size="lg"
                                       type="text"
                                       placeholder="Введите имя"
                                       name="name"
                                       onChange={handleInputChange}
                                   />
                               </FormControl>
                               <FormControl>
                                   <FormLabel>Фамилия</FormLabel>
                                   <OutlinedInput
                                       size="lg"
                                       type="text"
                                       placeholder="Введите фамилию"
                                       name="surname"
                                       onChange={handleInputChange}
                                   />
                               </FormControl>
                               <FormControl>
                                   <FormLabel>Email</FormLabel>
                                   <OutlinedInput
                                       size="lg"
                                       type="login"
                                       placeholder="Введите email"
                                       name="email"
                                       onChange={handleInputChange}
                                   />
                               </FormControl>
                               <Link >Изменить пароль</Link>
                               <YellowButton
                                   disabled={isDisabled}
                                   sx={{":disabled": {backgroundColor: 'gray'}}}
                               >
                                   Сохранить
                               </YellowButton>
                           </AuthForm>
                           <Box className="student-photo" sx={{ml:20, px:2}}>
                               <img src='https://sprintz.kz/assets/img/temp/avatar.svg' alt="avatar icon" className='pic'/>
                               <Link>Заменить изображение</Link>
                               <Box className='vip-box' >
                                   <Typography sx={{fontWeight:500}}>с VIP</Typography>
                                   <Typography sx={{fontWeight:700}}>2 000 тенге / в год</Typography>
                                   <Button disableRipple>КУПИТЬ</Button>
                               </Box>
                           </Box>
                       </Box>
                    </TabPanel>
                    <TabPanel
                        value={value} index={1}
                    >
                        <Box className="window-for-courses">
                            <Box sx={{mb:5}}>
                                <Typography>Вы проходите</Typography>
                                <TableContainer component={Paper} >
                                    <Table  aria-label="simple table">
                                        <TableCell >Активных курсов пока нет</TableCell>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box sx={{mb:5}}>
                                <Typography>Завершенные курсы</Typography>
                                <TableContainer component={Paper} >
                                    <Table  aria-label="simple table">
                                        <TableCell >Завершенных курсов пока нет</TableCell>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </TabPanel>
                </Box>
            </Box>
        </Content>
    );
};

export default Student;
const Content = styled(Box)(() =>({
    display:'flex',
    justifyContent:'center',
    '.sub-content':{
        width: 1080,
        display:'inherit',
        '.MuiLink-root':{
            textAlign:'start'
        },
        '.student-photo':{
            display:'flex',
            rowGap:30,
            flexDirection:'column',
            alignItems:'center',
            '.pic':{
                width: '70%',
                borderRadius: '50%',
                overflow: 'hidden',
            },
            '.vip-box':{
                padding: 30,
                height:182,
                width:310,
                borderRadius: 5,
                background: 'linear-gradient(to top,#ff9500,#ff453a)',
                '.MuiTypography-root':{
                    fontSize: 24,
                    color: '#fff',
                    marginBottom:30,
                    textAlign: 'center'
                },
                '.MuiButton-root':{
                    height:50,
                    width:'100%',
                    backgroundColor:'#fff',
                    fontWeight:700,
                    color:'#333',
                    fontSize:18,
                    "&:hover":{
                        backgroundColor:'#eee'
                    }
                }
            }
        },
    },
    '.left-panel':{
        width:200,
        paddingTop:'35px',
        '.MuiTypography-root':{
            marginBottom:50,
            color:'#828282',
            fontWeight: 600,
            cursor:'pointer',
            '&:active':{
                color: '#333'
            }
        }
    },
    '.window-for-courses':{
        flexDirection:'column',
        '.MuiTableContainer-root':{
            boxShadow:'none',
            border:'1px solid #dee2e6',
            width:'100%',
            '.MuiTableCell-root':{
                height: 80,
                display: 'flex',
                alignItems: 'center',
                padding: '0 30px',
            }
        },
        '.MuiTypography-root':{
            fontSize: 16,
            fontWeight: 500,
            color: '#828282',
            marginBottom: 20
        }
    }
}))
const MyTabs = styled(Tabs)(() => ({

    '& .MuiTabs-indicator': {
        position:'static',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',

    },
    paddingTop: 50,
}));
const MyTab = styled(Tab)(() => ({
    color: '#828282',
    textTransform: 'none',
    padding:"0 180px 50px 0",
    display:'flex',
    alignItems:'start',
    whiteSpace:'nowrap',
    '&.Mui-selected': {
        color: '#333',
    },
}));
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 5, pl:5 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
