import Express from "express";
import { checkForUserTokenExist } from "../middleware/authMiddleware";
import { addNote, deleteNote, getUserNotes, updateNote } from "../controllers/noteController";
import { checkMissingFields } from "../middleware/fieldsMiddleware";
const notesRoute = Express.Router();

notesRoute.get('/', checkForUserTokenExist, getUserNotes);
notesRoute.post('/', checkForUserTokenExist, checkMissingFields(['content', 'user']), addNote);
notesRoute.put('/', checkForUserTokenExist, checkMissingFields(['_id', 'content']), updateNote);
notesRoute.delete('/:id', checkForUserTokenExist, deleteNote);

export default notesRoute;