//objetos 
//é uma estrutura que nos permite organizar dados na forma de "chaves valor"

//-----------------------

let pessoa = {
    nome: 'Joana',
    idade: 23, 
    cpf: '123.132.123-32',
    altura: 156,
    endereço: {
        rua: 'Rua das flores',
        numero: 2345,
        bairro: 'cidade das flores',
        cidade: 'São paulo',
        cep: '00000-000'
    },
    solteiro: true,
    habilidades: ['react', 'JS', 'java'],
    cumprimenta(){
        console.log(`olá, tudo bem,  meu nome é ${this.nome} `)
    }

}