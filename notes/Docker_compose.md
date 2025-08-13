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


***Allways remember docker compose will take care of creating a common network that will be named <project-name>_default*** 

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
    networks:
      - mongo-network

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
    networks:
      - mongo-network

networks:
  mongo-network:
    driver: bridge
```
