const readlineSync = require('readline-sync');
let arraycadastros = []
function inicio() {
    console.log("Olá bem vindo ao Hemocentro, por favor cadastrece aqui para mais informações");
    const cadastronome = readlineSync.question("Seu nome: ")
    const cadastroidade = readlineSync.question("Sua idade: ")
    const cadastropeso = readlineSync.question("Seu peso (por kilos): ")
    const cadastrosanguetipo = readlineSync.question("Seu tipo sanguineo: ")
    const ultimadoacao = readlineSync.question("A data da sua ultima doação: ")
    const cadastro = {
    nome: cadastronome,
    idade: cadastroidade,
    peso: cadastropeso,
    tiposanguineo: cadastrosanguetipo,
    ultimadoacao: ultimadoacao
    }
    arraycadastros.push(cadastro)
}
inicio()

function exibirmenu() {
    console.log("==============SISTEMA DE CADASTRO DE DOADORES DE SANGUE==============")
    console.log("1. CADASTRAR NOVO DOADOR.")
    console.log("2. LISTAR DOADORES.")
    console.log("3. BUSCAR DOADOR POR TIPO SANGUINEO")
    console.log("4. BUSCAR DOADOR POR DATA DA ULTIMA DOAÇÃO.")
    console.log("5. SAIR.")
}
rodaralternativas();

function OP1() {
    console.log("Você selecionou a opção 1. para fazer login como novo doador, coloque os dados do novo doador: ")
    const novocadnome = readlineSync.question("Nome: ")
    const novocadidade = readlineSync.question("Idade: ")
    const novocadpeso = readlineSync.question("Peso(por kilos): ")
    const novocadsanguetip = readlineSync.question("Seu tipo sanguineo: ")
    const novocadultimadoac = readlineSync.question("data da ultima doação: ")
    cadastro = {
        nome: novocadnome,
        idade: novocadidade,
        peso: novocadpeso,
        tiposanguineo: novocadsanguetip,
        ultimadoacao: novocadultimadoac
    }
    arraycadastros.push(cadastro)
}
function OP2() {
    console.log("----------------------")
    console.log("LISTAGEM DE DOADORES")
    console.log("----------------------")
    console.log("NOME           | PESO | IDADE | TIPO SANGUINEO | ULTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")
    for (let i = 0; i < arraycadastros.length; i++){
        console.log(`${arraycadastros[i].nome.padEnd(5)}| ${arraycadastros[i].peso.padEnd(5)}| ${arraycadastros[i].idade.padEnd(5)}| ${arraycadastros[i].tiposanguineo.padEnd(5)}| ${arraycadastros[i].ultimadoacao.padEnd(5)}|`)
    }
    console.log("---------------------------------------------------------------")
}
function OP3() {
    const tiposanguineodebusca = readlineSync.question("Celecione o tipo sanguineo que deseja: ")
    console.log("----------------------")
    console.log("LISTAGEM DE BUSCA")
    console.log("----------------------")
    console.log("NOME           | PESO | IDADE | TIPO SANGUINEO | ULTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")
    let sanguefiltrado = arraycadastros.filter(cadastro => cadastro.tiposanguineo === tiposanguineodebusca);
    for (let i = 0; i < arraycadastros.length; i++){
        console.log(`${sanguefiltrado[i].nome.padEnd(5)}| ${sanguefiltrado[i].peso.padEnd(5)}| ${arraycadastros[i].idade.padEnd(5)}| ${sanguefiltrado[i].tiposanguineo.padEnd(5)}| ${sanguefiltrado[i].ultimadoacao.padEnd(5)}|`)
    }
    console.log("---------------------------------------------------------------")
}
function OP4() {
    const datadesejada = readlineSync.question("Celecione a data dejada pra a filtragem: ")
    const datascelecionadas = arraycadastros.filter(cadastro => cadastro.ultimadoacao <= datadesejada);
    console.log("----------------------")
    console.log("LISTAGEM DE BUSCA")
    console.log("----------------------")
    console.log("NOME           | PESO | IDADE | TIPO SANGUINEO | ULTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")
    for (let i = 0; i < arraycadastros.length; i++){
        console.log(`${datascelecionadas[i].nome.padEnd(5)}| ${datascelecionadas[i].peso.padEnd(5)}| ${datascelecionadas[i].idade.padEnd(5)}| ${datascelecionadas[i].tiposanguineo.padEnd(5)}| ${datascelecionadas[i].ultimadoacao.padEnd(5)}|`)
    }
    console.log("---------------------------------------------------------------")
}


function processarEscolha(opcao) {
    switch (opcao) {
        case '1':
            OP1()
            break;
        case '2':
            OP2()
            break;
        case '3':
            OP3()
            break;
        case '4':
            OP4()
            break;
        case '5':
            console.log("Encerrando o programa...");
            return true;
    
        default:
            console.log("opção selecionada incorretamente")
            break;
    }
    return false;
}
function rodaralternativas() {
    let encerrar = false;

    while (!encerrar) {
        exibirmenu();
        const opcao = readlineSync.question("Digite o número da opção desejada: ");
        encerrar = processarEscolha(opcao);
    }
}