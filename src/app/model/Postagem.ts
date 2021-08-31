import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem {
    public id: string;
    public titulo: string;
    public texto: string;
    public date: Date;
    public usuario: Usuario;
    public tema: Tema;

}