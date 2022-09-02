import { ICharacter } from "./characterEntity";



export interface ICharacterRepository {
    createCharacter(character:ICharacter):Promise<ICharacter|null>;
    getAllCharacters() : Promise<ICharacter[]|null>;
    getCharacterById(id : string) : Promise<ICharacter|null>;
    updateCharacter(character:ICharacter,id: string) : Promise<ICharacter|null>;
    deleteCharacter(id : string) : Promise<ICharacter|null>;
    getCharacterByName(name : string) : Promise<ICharacter|null>;
  

}