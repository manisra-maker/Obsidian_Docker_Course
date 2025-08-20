---
id: Adding_to_docker_hub
aliases: []
tags: []
created_on : 2025-08-17 17:37
---

# How to push docker images to docker hub

First just create a account on docker hub via github 

Then on the terminal run 

```bash
docker login
```
This will ask for login and you have to login 

Then we need to change the name of the docker image that is to 

```bash
docker tag imgname:vername to username/imgname:ver
```

Finally do docker push
