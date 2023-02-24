import {
    MAIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    STUDENT_ROUTE,
    SCHOOL_ROUTE,
    COURSE_ROUTE,
    AUTH_ROUTE, CATEGORY_ROUTE
}
    from "./utils/consts";
import Teacher from "./pages/Teacher";
import Main from "./pages/Main";
import Student from "./pages/Student";
import Schools from "./pages/Schools";
import SchoolPage from "./pages/SchoolPage";
import CoursePage from "./pages/CoursePage";
import Auth from "./pages/Auth";
import CategoryPage from "./pages/CategoryPage";
export const studentRoute =[
    {
        path: STUDENT_ROUTE,
        Component: Student
    }
]

export  const publicRoutes =[
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Teacher
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Student
    },
    {
        path: SCHOOL_ROUTE ,
        Component: Schools
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
        path: AUTH_ROUTE,
        Component: Auth
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