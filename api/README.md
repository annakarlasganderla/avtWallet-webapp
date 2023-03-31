# Setup - Avt Wallet API

## Descrição

Avt Wallet API with [Nest](https://github.com/nestjs/nest) framework repository.

## Pré requisitos

```bash
* docker
* node versão 16.14.0 ou superior
```

## Comandos iniciais

```bash
# normal
$ npm install
$ docker volume create --name=avt_wallet_api
$ docker-compose up -d
```

Outra opção

```bash
# makefile (mac/linux)
$ make install
```

## Rodando a API

```bash
$ npm start
```

## PgAdmin4

Para se conectar ao banco via PgAdmin4

```bash
* Acessar o pg admin na porta -> http://localhost:5050
* Botão direito em "Servers" -> "Register" -> "Server..."
```
No pop-up que abrir:

```bash
* Aba General: 
 - "Name" -> não importa
* Aba Connection: 
 - "Host name/addres" -> 172.17.0.1 (É o ip do gateway entre o container do docker e o pc host)
 - Username -> "admin"
 - Password -> "postgres"
```

## Docker

Para buildar o back end do projeto

Abra um terminal na pasta "api" e digite o comando:

```bash
* docker build --tag "api_avtwallet" .
```

Obs: importante validar se no arquivo docker-compose.yaml, no volume da api, o atributo "image:"</br> 
está com o valor correto. O valor correto vai ser o valor digitado depois de "--tag". Segundo o</br> 
exemplo: "api_avtWallet:latest". Passar a versão como "lastest" é necessário, poís não foi</br> 
especificado uma versão na hora do build

Depois de ter buildado a imagem o que resta é rodar o projeto:

```bash
* docker-compose up -d
```

## License

Nest is [MIT licensed](LICENSE).
