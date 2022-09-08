import { IMovie } from "./movieEntity";
import {v4} from 'uuid';

export class MovieValue implements IMovie {
    id : string;
    image : string;
    title : string;
    date : string;
    qualification : number;
    GenreId : string;

    constructor({image,title,date,qualification,GenreId}:{image : string,title:string,date:string,qualification:number,GenreId : string}){
        this.id = v4();
        this.image = image;
        this.title = title;
        this.date = date;
        this.qualification = qualification;
        this.GenreId = GenreId;

    }
}