import {TEACHER_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, STUDENT_ROUTE, SCHOOL_ROUTE} from "./utils/consts";
import Teacher from "./pages/Teacher";
import Main from "./pages/Main";
import Student from "./pages/Student";
import Schools from "./pages/Schools";
import SchoolPage from "./pages/SchoolPage";


export  const teacherRoute =[
    {
        path: TEACHER_ROUTE,
        Component: Teacher
    },

]
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
        Component: Student
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
        path: SCHOOL_ROUTE + '/:id',
        Component: SchoolPage
    },

]