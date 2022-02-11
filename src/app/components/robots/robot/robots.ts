import { v4 as uuidv4 } from 'uuid';

export class Robot{
    name:string;
    isCompleted: boolean;
    uuid:string = uuidv4();
}