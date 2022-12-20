import {makeAutoObservable} from "mobx";
export default class UserStore {
    constructor() {
        this._isStudent = false
        this._isTeacher = false
        this._user = {}
        makeAutoObservable(this)
    }
    setIsTeacher(bool){

        this._isTeacher = bool
    }
    setIsStudent(bool){
        this._isStudent = bool
    }
    setUser(user){
        this._user = user
    }
    get isStudent(){
        return this._isStudent
    }
    get isTeacher(){
        return this._isTeacher
    }
    get user(){
        return this._user
    }
}