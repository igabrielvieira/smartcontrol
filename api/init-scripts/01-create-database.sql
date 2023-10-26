DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'smartcontrol') THEN
        CREATE DATABASE smartcontrol;
    END IF;
END $$;


-- Criação do banco de dados
