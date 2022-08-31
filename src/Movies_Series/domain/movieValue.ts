import { IMovie } from "./movieEntity";
import {v4} from 'uuid';

export class MovieValue implements IMovie {
    id : string;
    image : string;
    title : string;
    date : string;
    qualification : number;

    constructor({image,title,date,qualification}:{image : string,title:string,date:string,qualification:number}){
        this.id = v4();
        this.image = image;
        this.title = title;
        this.date = date;
        this.qualification = qualification;

    }
}