import { Postagem } from "./Postagem";

export class Usuario {
    public id: number; 
    public nome: string;
    public usuario: string;
    public senha: string;
    public dataNascimento: Date;
    // tipo de dado Date, por se tratar de uma data XX/YY/AAA
    public postagem: Postagem []
    // um usuário pode ter várias postagens
    public tipo: string;
    public foto: string;

}
