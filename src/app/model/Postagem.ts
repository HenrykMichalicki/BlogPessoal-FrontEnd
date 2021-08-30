import { Tema } from "./Tema";
import { Usuário } from "./Usuario";

export class Postagem {
    public id: string;
    public titulo: string;
    public texto: string;
    public date: Date;
    public usuario: Usuário;
    public tema: Tema;

}