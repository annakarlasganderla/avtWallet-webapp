#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE $APP_DB_NAME;
  CREATE USER $APP_DB_USER WITH PASSWORD '$APP_DB_PASS';
  GRANT ALL ON DATABASE $APP_DB_NAME TO $APP_DB_USER;
  ALTER DATABASE $APP_DB_NAME OWNER TO $APP_DB_USER;
  \connect $APP_DB_NAME $APP_DB_USER
  BEGIN;
    CREATE TABLE IF NOT EXISTS Users 
    (
      id          uuid        PRIMARY KEY,
      name        char(50)    NOT NULL,
      email       char(50)    NOT NULL,
      login       char(50)    NOT NULL,
      password    char(50)    NOT NULL,
      createdAt   timestamp   NOT NULL,
      updatedAt   timestamp,
      deletedAt   timestamp
	  );
  COMMIT;
EOSQL