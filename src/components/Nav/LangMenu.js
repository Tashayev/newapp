import * as React from 'react';
import {Box, Card, MenuItem, } from "@mui/material";
import {styled} from "@mui/material/styles";
import {useContext, useState} from "react";
import {Context} from "../../index";
import {useSelector} from "react-redux";

 function LangMenu() {
    const [view, setView] = useState('list');
    const {languages} = useContext(Context)
    const [itemsArray, setItemsArray] = useState(languages)
    const handleChange = (event, nextView) => {
        setView(nextView);
    };
    const [selectedLang, setSelectedLang] = useState()


     const handleRearrange = (itemToMove) => {
        const newItemsArray = [...itemsArray];
        const indexToMove = newItemsArray.findIndex((item) => item.id === itemToMove.id);
        if (indexToMove !== -1) {
            newItemsArray.splice(indexToMove, 1);
            newItemsArray.unshift(itemToMove);
            setItemsArray(newItemsArray);
        }
    };

    return (
        <Menu sx={{display:{xs:'none', sm: 'none', md: "flex"}}}>
            <Card
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
                className='wrapper'
            >
                {itemsArray.map( (lang) => (
                    <MenuItem

                        value='any'
                        className='lang'
                        disableRipple
                        key={lang.id}
                        onClick={() => handleRearrange(lang) && setSelectedLang(lang.value)}
                    >
                        {lang.name}
                    </MenuItem>
                    )
                )}
             </Card>
        </Menu>
    );
}


const Menu = styled(Box)({
    height:30,
    overflow:'hidden',
    backgroundColor:'#fff',
    boxShadow:'none',
    cursor:'pointer',
    '&:hover':{
        height:90,
        boxShadow:'0 5px 10px rgb(0 0 0 / 30%)',
        zIndex: 11,
        borderRadius:7,
        position: "static",
        marginTop:60,
        '&:focus, &:hover':{
            color: "#2f80ed",
            backgroundColor:'#fff',
        },
    },
    '.lang':{
        height: 30,
        width:40,
        paddingLeft:8,
        border: 'none',
        textTransform:'none',
        '&:focus, &:hover':{
            color: "#2f80ed",
            backgroundColor:'#fff',
        },

    }
});

export default LangMenu
// export const { setMyVariable } = mySlice.actions;
// export default mySlice.reducer;