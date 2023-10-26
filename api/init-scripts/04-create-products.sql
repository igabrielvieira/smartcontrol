CREATE TABLE IF NOT EXISTS products (
  name VARCHAR NOT NULL,
  category_id UUID NOT NULL,
  FOREIGN KEY(category_id) REFERENCES categories(id),
  quantidade_itens INTEGER NOT NULL DEFAULT 0,
  id SERIAL NOT NULL UNIQUE
);

-- Criando a tabela de produtos
