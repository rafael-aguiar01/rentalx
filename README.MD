**RF** -> Requisitos funcionais

    São as funcionalidades que a aplicação vai poder ter( ex: O usuário pode cadastrar uma categoria)

**RNF** -> Requisitos não funcionais

    Não estão ligados diretamente com a regra aplicação(ex: os dados serão salvos no banco de dado postgree)

**RN** -> Regra de negócio

    As regras por trás do requisitos(ex: não deve ser possível cadastrar uma categoria com o nome já existente)

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
    Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível

# Alterar carro

 Não deve ser possível alterar a placa de um carro já cadastrado.

# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel,
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel
O usuário deve estar logado na aplicação

# Listagem de alugueis para usuário

**RF**
Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
O usuário deve ser logado na aplicação

# Recuperar Senha

**RF**
Deve ser possível o usuário recuperar a senha informando o e-mail
O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
O usuário deve conseguir inserir uma nova senha

**RN**
O usuário precisa informar uma nova senha
O link enviado para a recuperação deve expirar em 3 horas



























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
