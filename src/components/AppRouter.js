import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Navigate, Route, Routes} from "react-router-dom";
import {teacherRoute, studentRoute, publicRoutes} from "../routes";
import {Context} from "../index";
import {MAIN_ROUTE} from "../utils/consts";
const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isTeacher && teacherRoute.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {user.isStudent && studentRoute.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={MAIN_ROUTE}/>} />
        </Routes>
    );
});

export default AppRouter;