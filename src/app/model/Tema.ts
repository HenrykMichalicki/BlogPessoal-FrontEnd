import { Postagem } from "./Postagem";

export class Tema{

    public id: number;
    public descricao: string;
    public postagem: Postagem[]; 
    // [] várias postagens no mesmo tema

}