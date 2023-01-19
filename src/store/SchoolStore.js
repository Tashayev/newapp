
import {makeAutoObservable} from "mobx";


export default class SchoolStore {


    constructor()   {


        this._schools = [
            {id: 1, name: 'ZAM-ZAM EDUCATION 1', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
            {id: 2, name: 'ZAM-ZAM EDUCATION 2', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
            {id: 3, name: 'ZAM-ZAM EDUCATION 3', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
            {id: 5, name: 'ZAM-ZAM EDUCATION 4', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
            {id: 4, name: 'ZAM-ZAM EDUCATION 5', img:'https://app.sprintz.kz/media/logo/1/a46919a1-07de-43a1-93ba-02375d136a40.png'},
        ]


        this._selectedSchool = {}

        makeAutoObservable(this)
    }
    setSchools(schools){
        this._schools = schools
    }

    get schools(){
        return this._schools
    }
    get selectedSchool() {
        return this._selectedSchool
    }
}