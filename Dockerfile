FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]

# Install  docker build -t rentx .
# docker run -p 3333:3333 rentx

# Visualizar os containers que estão em execução
# docker ps

# Lista todos os dockers( em execução ou não)
# docker ps -a 

# Removendo o container(precisa estar parado)
# docker rm "id_do_container"

# Iniciando o container
# docker start  "id_do_container"

# Parando o container
# docker stop "id_do_container"

# Iniciando com docker compose, com -d roda em background
# docker-compose up -d

# Parando o container em execução
# docker-compose stop

# Iniciando o container
# docker-compose stop

# Removendo todo o container
# docker-compose down

# Acessando o container
# docker exec -it "id_do_container" /bin/bash

# CTRL + D -> Sai do container

# Ficar observando o log em execução
# docker logs "id_do_container" -f

# Ver os últimos log em execução
# docker logs "id_do_container"

# acessar o ip do container
# docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' "id_do_container"
# docker exec "id_do_container" /etc/hosts