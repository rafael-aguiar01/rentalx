**RF** -> Requisitos funcionais

    - São as funcionalidades que a aplicação vai poder ter( ex: O usuário pode cadastrar uma categoria)

**RNF** -> Requisitos não funcionais

    - Não estão ligados diretamente com a regra aplicação(ex: os dados serão salvos no banco de dado postgree)

**RN** -> Regra de negócio

    - As regras por trás do requisitos(ex: não deve ser possível cadastrar uma categoria com o nome já existente)

# Cadastro de carro

**RF**
    Deve ser possível cadastrar um novo carro.


**RN**
    Não deve ser possível cadastrar um carro com uma placa já existente.
    O carro deve ser cadastrado com disponibilidade por padrão.
    O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
    Deve ser possível listar todos os carros disponíveis
    Deve ser possível listar todos os carros disponíveis pelo nome da categoria
    Deve ser possível listar todos os carros disponíveis pelo nome da marca
    Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**
    O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
    Deve ser possível cadastrar uma especificação para um carro


**RN**
    Não deve ser possível cadastrar uma especificação para um carro não cadastrado
    Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
    O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
    Deve ser possível cadastrar a imagem do carro

**RNF**
    Utilizar o multer para upload dos arquivos

**RN**
    O usuario deve por cadastrar mais de uma imagem para o mesmo carro.
    O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
    Deve ser possível cadastrar um aluguel

**RN**
    O aluguel deve ter duração mínina de 24 horas
    Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
      Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
    O usuário deve estar logado na aplicação

# Alterar carro


 Não deve ser possível alterar a placa de um carro já cadastrado.































yarn jest --init
// describe("Criar categoria", () => {  
//     it("Espero que 2 + 2 seja 4", () => {
//         const soma = 2+2;
//         const resultado = 4;
    
//         expect(soma).toBe(resultado)
//     })

//     it("Espero que 2 + 2 não seja 5", () => {
//         const soma = 2+2;
//         const resultado = 5;

//         expect(soma).not.toBe(resultado);
//     })
// })
