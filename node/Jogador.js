const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");

@Entity()
class Jogador {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("text")
    nome = "";

    @Column("int")
    numero = 0;
}

module.exports = Jogador;