
import {makeAutoObservable} from "mobx";

export default class SchoolStore {
    constructor()   {
        this._lessons = [
            {id: 1, name: 'Выполните задачу Материалы. Часть 4.'},
            {id: 2, name: 'Посмотрите видео №16 "Ответы на вопросы" (01:03:06)'},
            {id: 3, name: 'Посмотрите видео №17. "Вопросы для делателей" (00:57:52)' },
            {id: 4, name: 'Выполните задачу Материалы. Часть 5.'},
            {id: 5, name: 'Изучите статью "Новые определения"'},
            {id: 6, name: 'Посмотрите видео №18. "Как завершать интервью" (00:11:42).'},
            {id: 7, name: 'Посмотрите видео №17. "Вопросы для делателей" (00:57:52)' },
            {id: 8, name: 'Выполните задачу Материалы. Часть 5.'},
            {id: 9, name: 'Изучите статью "Новые определения"'},
            {id: 10, name: 'Посмотрите видео №18. "Как завершать интервью" (00:11:42).'},
        ]
        this._courses = [
            {id: 1, name: 'СЕССИЯ 1.'},
            {id: 2, name: 'ZAM-ZAM EDUCATION СЕССИЯ 2.'},
            {id: 3, name: 'СЕССИЯ 1.'},
            {id: 4, name: 'СЕССИЯ 1.'},
            {id: 5, name: 'СЕССИЯ 1.'},

        ]
        this._schools = [
            {id: 1, name: 'ZAM-ZAM EDUCATION 1', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
            {id: 2, name: 'ZAM-ZAM EDUCATION 2', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
            {id: 3, name: 'ZAM-ZAM EDUCATION 3', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
            {id: 5, name: 'ZAM-ZAM EDUCATION 4', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
            {id: 4, name: 'ZAM-ZAM EDUCATION 5', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
        ]

        this._selectedSchool = {}
        this._selectedCourse ={}
        makeAutoObservable(this)
    }
    setSchools(schools){
        this._schools = schools
    }
    setCourses(courses){
        this._courses = courses
    }
    setLessons(lessons){
        this._lessons = lessons
    }
    setSelectedLessons(lessons) {
        this._selectedSchool = lessons
    }
    setSelectedCourse(course) {
        this._selectedCourse = course
    }
    get courses(){
        return this._courses
    }
    get lessons(){
        return this._lessons
    }
    get schools(){
        return this._schools
    }
    get selectedSchool() {
        return this._selectedSchool
    }
    get selectedCourse() {
        return this._selectedCourse
    }
}