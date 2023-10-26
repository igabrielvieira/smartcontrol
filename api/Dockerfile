FROM postgres:latest

ENV POSTGRES_DB smartcontrol
ENV POSTGRES_USER root
ENV POSTGRES_PASSWORD root

COPY ./init-scripts/ /docker-entrypoint-initdb.d/
