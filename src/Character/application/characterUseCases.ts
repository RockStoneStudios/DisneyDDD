import {ICharacterRepository} from '../domain/characterRepository';
import {CharacterValue} from '../domain/characterValue';

export class CharacterUseCase {
   constructor (private readonly characterRepository : ICharacterRepository){}

   public getAllCharacter = async() => {
     const characters = await this.characterRepository.getAllCharacters();
     return characters;
   }

   public getCharacterById = async (id:string)=> {
          const character = await this.characterRepository.getCharacterById(id);
          return character;
   }

    public createCharacter = async({image,name,age,weight,history}:
                          {image : string,name:string,age:number,weight :number,history :string})=>{
                          const newCharacter = new CharacterValue({image,name,age,weight,history});
                          const character = await this.characterRepository.createCharacter(newCharacter);
                          return character;
                  }

    public deleteCharacter = async(id: string) => {
          const character = await this.characterRepository.deleteCharacter(id);
          return character;
    }    
    
    public updateCharacter = async({image,name,age,weight,history}:
                             {image:string,name:string,age:number,weight:number,history :string},id:string)=>{
                                const updateCharacter = new CharacterValue({image,name,age,weight,history});
                                const character = await this.characterRepository.updateCharacter(updateCharacter,id);
                                return character;
                             }

    public getCharacterByName = async (name :string) =>{
          const character = await this.characterRepository.getCharacterByName(name);
          return character;
    }     
    
 
 }

