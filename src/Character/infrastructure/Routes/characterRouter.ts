import {Router} from 'express';
import {CharacterUseCase} from '../../application/characterUseCases';
import {CharacterRepository} from '../Repository/character.mysql';
import {CharacterController} from '../Controller/characterController'

const router = Router();

const characterRepository = new CharacterRepository();

const characterUseCase = new CharacterUseCase(characterRepository);

const characterController = new CharacterController(characterUseCase);


router.get('/',characterController.getAllCharacter);
router.post('/create',characterController.createCharacter);
router.delete('/delete/:id',characterController.deleteCharacter);
router.put('/update/:id',characterController.updateCharacter);
router.get('/query',characterController.getCharacterByName);
router.get('/:id',characterController.getCharacterById);

export default router;
