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

## License

Nest is [MIT licensed](LICENSE).
