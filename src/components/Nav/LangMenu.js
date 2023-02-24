import * as React from 'react';

import {Card, Container, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
const DropDownMenu = styled('div')({
    '.card':{
        display:'absolute',
        boxShadow:'none',
        padding:2,
        height: 25,
        cursor:'pointer',

        },
    '&:hover':{
        '.card':{
            height: 50,
            boxShadow: 3,
        }
    }
})
export default function LangMenu() {
    return (
        <DropDownMenu>
            <Card className='card' >
                <Typography>рус</Typography>
                <Typography>Каз</Typography>
            </Card>
        </DropDownMenu>
    );
}