import {ICharacter} from '../../domain/characterEntity';
import {ICharacterRepository} from '../../domain/characterRepository';
import {CharacterValue} from '../../domain/characterValue';
import {Character} from '../Model/Character';


export class CharacterRepository implements ICharacterRepository {

    async getAllCharacters(): Promise<ICharacter[]|any> {
         const characters = await Character.findAll();
         return characters;
    }

    async getCharacterById(id: string): Promise<ICharacter | null> {
         const character = await Character.findByPk(id);
         return character;
    }

    async createCharacter(character: ICharacter): Promise<ICharacter|any> {
        const newCharacter = await Character.create(character);
        return newCharacter;
    }

    async deleteCharacter(id: string): Promise<ICharacter|any> {
        const character = await Character.destroy({where : {id:id}});
        return character;
    }

    async updateCharacter( character: ICharacter,id: string): Promise<ICharacter | any> {
         const updatecharacter = await Character.update(character,{where : {id : id}});
         return updatecharacter;
    }

    async getCharacterByName(name: string): Promise<ICharacter | any> {
        const character = await Character.findOne({where : {name : name}});
        return character;
    }
   
}