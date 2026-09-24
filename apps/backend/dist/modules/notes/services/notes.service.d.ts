import { Repository } from 'typeorm';
import { Note } from '../entities/note.entity';
export declare class NotesService {
    private readonly notesRepository;
    constructor(notesRepository: Repository<Note>);
}
