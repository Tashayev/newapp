import React, {useEffect, useState} from 'react';
import {fetchCategory, fetchCourses, fetchOrganizations} from "../http/courseAPI";
import UserStore from "./UserStore";
import App from "../App";
import {Context} from "../index";
import { RotatingLines } from 'react-loader-spinner';
import {Box} from "@mui/material";
function FetchData(){
    const [organizations, setOrganizations] = useState()
    const [courses, setCourses] = useState()
    const [categories, setCategories] = useState();
    const [spinner, setSpinner] = useState(true)
    useEffect(()=>{
        setSpinner(true);
        fetchOrganizations().then(data =>setOrganizations(data.results)).catch(err=>console.log(err))
            .finally(() => {
                setSpinner(false);
            });
    }, [])
    useEffect(()=>{
        setSpinner(true);
        fetchCourses().then(data =>setCourses(data.results)).catch(err=>console.log(err))
            .finally(() => {
                setSpinner(false);
            });
    }, [])
    useEffect(()=>{
        setSpinner(true);
        fetchCategory().then(data =>setCategories(data)).catch(err=>console.log(err))
            .finally(() => {
                setSpinner(false);
            });

    }, [])
    const langStore = [
        {
            name: 'рус',
            id: 1,
            value: 'name_ru'
        },
        {
            name: 'каз',
            id: 2,
            value: 'name_kk'
        },
        {
            name: 'eng',
            id: 3,
            value: 'name_en'
        }
    ]
    return(
        <Context.Provider value={{
            user: new UserStore(),
            courses: courses,
            organizations: organizations,
            categories: categories,
            languages: langStore,
        }}>
            {spinner?<Box sx={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                backgroundColor: 'rgba(0, 0, 0, 0.5)'

            }}

            >
                <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.9"
                    width="150"
                />
            </Box>:null}
            <App/>

        </Context.Provider>
    )
}
export default FetchData;