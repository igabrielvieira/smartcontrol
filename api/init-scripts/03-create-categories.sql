CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  quantidade_pertencente INTEGER DEFAULT 0,
  name VARCHAR NOT NULL
);

-- Criando a tabela de categorias
