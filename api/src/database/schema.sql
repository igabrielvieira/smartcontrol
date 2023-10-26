CREATE DATABASE smartcontrol;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  quantidade_pertencente INTEGER DEFAULT 0,
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  name VARCHAR NOT NULL,
  category_id UUID NOT NULL,
  FOREIGN KEY(category_id) REFERENCES categories(id),
  quantidade_itens INTEGER NOT NULL DEFAULT 0,
  id SERIAL NOT NULL UNIQUE
);

