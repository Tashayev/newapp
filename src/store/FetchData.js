import React, {useEffect, useState} from 'react';
import {fetchCategory, fetchCourses, fetchOrganizations} from "../http/courseAPI";
import UserStore from "./UserStore";
import App from "../App";
import {Context} from "../index";
function FetchData(){
        const [organizations, setOrganizations] = useState()
        const [courses, setCourses] = useState()
        const [categories, setCategories] = useState();
        const [spinner, setSpinner] = useState(false)
    // setSpinner(true);
        useEffect(()=>{
            fetchOrganizations().then(data =>setOrganizations(data.results))
            fetchCourses().then(data =>setCourses(data.results))
            fetchCategory().then(data =>setCategories(data))/*.finally(() => {
                setSpinner(false);
            })
*/
        }, [])
        // if (spinner) {
        //     return <LoadingComponent />;
        // }
        return(
            <Context.Provider value={{
                user: new UserStore(),
                courses: courses,
                organizations: organizations,
                categories: categories
            }}>
                <App />
            </Context.Provider>
        )
}
export default FetchData;