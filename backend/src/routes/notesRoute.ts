import Express from "express";
import { checkForUserTokenExist } from "../middleware/authMiddleware";
import { addNote, getUserNotes } from "../controllers/noteController";
import { checkMissingFields } from "../middleware/fieldsMiddleware";
const notesRoute = Express.Router();

notesRoute.get('/', checkForUserTokenExist, getUserNotes);
notesRoute.post('/', checkForUserTokenExist, checkMissingFields(['content', 'user']),addNote)

export default notesRoute;