import { Request,Response } from 'express';
import {ICharacter} from '../../domain/characterEntity';
import {CharacterUseCase} from '../../application/characterUseCases';

export class CharacterController {
    constructor(private characterCase : CharacterUseCase){}

    public getAllCharacter = async(req:Request,res:Response):Promise<ICharacter[]|Response> => {
          try{
              const characters = await this.characterCase.getAllCharacter();
              return res.status(200).json(characters);
          }catch(error){
            return res.status(500).json(error);
          }
    }

    public getCharacterById = async(req:Request,res:Response):Promise<ICharacter|Response>=>{
        try{
            const character = await this.characterCase.getCharacterById(req.params.id);
            return res.status(200).json(character);
        }catch(error){
            return res.status(500).json(error)
        }
    }

    public createCharacter = async(req:Request,res:Response):Promise<ICharacter|Response> =>{
         try{
             const character = await this.characterCase.createCharacter(req.body);
             return res.status(201).json(character);
         }catch(error){
            return res.status(500).json(error);
         }
    }

    public deleteCharacter = async(req:Request,res:Response):Promise<ICharacter|Response>=>{
          try{
              const character = await this.characterCase.deleteCharacter(req.params.id);
              return res.status(200).json({message : `The Character has been delete with Successful`});
          }catch(error){
            return res.status(500).json(error);
          }
    }

    public updateCharacter = async(req:Request,res:Response):Promise<ICharacter|Response>=>{
        try{
            const character = await this.characterCase.updateCharacter(req.body,req.params.id);
            console.log(character)
            return res.status(200).json({message : `Character has been Updated with Successful`});
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public getCharacterByName = async(req:Request,res:Response):Promise<ICharacter|Response>=>{
         console.log("----------------"+req.query.name);
        try{
             const character = await this.characterCase.getCharacterByName(<string>req?.query?.name);
             return res.status(200).json(character);
        }catch(error){
            return res.status(500).json(error);
        }
    }
}