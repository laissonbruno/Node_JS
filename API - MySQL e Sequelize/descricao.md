sistema desenvolvido utilizando padrão mvc de arquitetura.
CRUD

npm init -y
npm install express
npm install body-parser
npm install npm install --save-dev nodemon
npm install mysql2
npm install sequelize
npm install sequelize-cli
npm install path


<!-- descrição sequelize -->
npx sequelize-cli init
npx sequelize-cli model:create --name Pessoas --attributes
npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
npx sequelize-cli model:create --name Matriculas --attributes status:string
nome:string,ativo:boolean,email:string,role:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-pessoa
npx sequelize-cli db:seed:all