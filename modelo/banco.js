const Sequelize = require("sequelize")
// const Cadastro = require("./post")
const sequelize = new Sequelize(
    "n1",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
)

// sequelize.authenticate().then(function () {
//     console.log("conectado")
// }).catch(function (erro) {
//     console.log("falha ao se conectar: " + erro)
// })

// Agenda.create({
//     nome: "Vitinho",
//     endereco: "Rua Feli natal, 25",
//     bairro: "Jarim do gelo",
//     cep: "102546",
//     cidade: "Rio de janeiro",
//     estado: "RJ"
// })



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
