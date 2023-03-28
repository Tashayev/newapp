import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import { studentRoute, publicRoutes} from "../routes";
import {Context} from "../index";
import {MAIN_ROUTE} from "../utils/consts";
const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isStudent && studentRoute.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={MAIN_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;