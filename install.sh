npm install

database_url_config =''

echo 'Insira a variavel de ambiente do banco de dados:'

echo 'Ex: DATABASE_URL="mysql://USER:PASSWOR@localhost:3306/DATABSE_NAME"'

read database_url_config

echo "$database_url_config" >> .env

npx prisma generate