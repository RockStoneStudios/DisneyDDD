import { ICharacter } from "./characterEntity";
import {v4} from 'uuid';

export class CharacterValue implements ICharacter {
     
     id: string;
     image : string;
     name : string;
     age : number;
     weight : number;
     history :string;
   

     constructor({image,name,age,weight,history}:
        {image : string, name : string,age: number,weight : number,history : string}){
            this.id = v4();
            this.image = image;
            this.name = name;
            this.age = age;
            this.weight = weight;
            this.history = history;
            
        }


}