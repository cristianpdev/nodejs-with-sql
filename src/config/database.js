module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'sqlnode',
    define: {
        timestamps: true,
        // nomes_das_tabelas_no_formato_snake_case
        underscored: true
    },      
}