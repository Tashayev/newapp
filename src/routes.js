import {
    MAIN_ROUTE,
    STUDENT_ROUTE,
    SCHOOL_ROUTE,
    COURSE_ROUTE,
    AUTH_ROUTE, CATEGORY_ROUTE, REGISTRATION_ROUTE, CABINET_ROUTE
}
    from "./utils/consts";
import Main from "./pages/Main";
import Student from "./pages/Student";
import Schools from "./pages/Schools";
import SchoolPage from "./pages/SchoolPage";
import CoursePage from "./pages/CoursePage";
import Auth from "./pages/Auth";
import CategoryPage from "./pages/CategoryPage";
import RegistrationPage from "./pages/RegistrationPage";
import Cabinet from "./pages/Cabinet";
export const studentRoute =[
    {
        path: CABINET_ROUTE,
        Component: Cabinet
    },
    {
        path: STUDENT_ROUTE ,
        Component: Cabinet
    },

]

export  const publicRoutes =[
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: SCHOOL_ROUTE + '/:pk',
        Component: SchoolPage
    },
    {
        path: COURSE_ROUTE + '/:pk',
        Component: CoursePage
    },
    {
        path: AUTH_ROUTE ,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    },
    {
        path: CATEGORY_ROUTE +'/:id',
        Component: CategoryPage
    },

    {
        path: CATEGORY_ROUTE +'/:id/sub/:course_category',
        Component: CategoryPage
    },
]