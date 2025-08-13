---
id: Docker_compose
aliases: []
tags: []
created_on : 2025-08-12 16:15
---

# Docker compose and what is it ? 

Before to run the docker network of mongo you had done [[Docker_Network]]

You can instead write a dockercompose.yaml

![[../assets/imgs/Docker_Compose.png]]


***Allways remember docker compose will take care of creating a common network that will be named <project-name>_default project_name in this case is the folder of the project*** 

```bash
version: "3.8"

services:
  mongodb:
    image: mongo
    container_name: mongodb
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: secret123

  mongo-express:
    image: mongo-express
    container_name: mongo-express
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_SERVER: mongodb
      ME_CONFIG_MONGODB_ADMINUSERNAME: admin
      ME_CONFIG_MONGODB_ADMINPASSWORD: secret123
      ME_CONFIG_BASICAUTH_USERNAME: admin
      ME_CONFIG_BASICAUTH_PASSWORD: secret123
    depends_on:
      - mongodb
```

# Adding a independent network / compose network 

```bash
networks:
  mongo-network:
    driver: bridge
```

This will create a network called demo_proj_mongo-network

If you really want the network to just be mongo-network (no prefix), you need to mark it as external and either create it yourself beforehand or let it already exist:

```bash
networks:
  mongo-network:
    external: true
```

# Docker start container present inside yaml 

```bash
docker-compose -f mongo_infra_docker.yaml up
```

# Docker stop container present inside yaml 

```bash
docker-compose -f mongo_infra_docker.yaml down
```

# Docker start container present inside yaml inside detach mongo_infra_docker

```bash
docker-compose -f mongo_infra_docker.yaml up -d
Creating network "demoproj_default" with the default driver
Creating mongodb ... done
Creating mongo-express ... done
```

## Note 

When you restart docker containers their data will be lost so we need to make docker volumes for persistent data storage .
