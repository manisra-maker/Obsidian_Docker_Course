---
id: Docker commands
aliases: []
tags: []
created on : 2025-08-05 15:43
---

# Docker commands 

| Command        | Outcome                                                          |
| -------------- | ---------------------------------------------------------------- |
| docker pull    | pulls a image from docker hub                                    |
| docker run     | will pull and directly run the image as a container but remember that it runs in background to actually run it you need to do docker start then exec -it |
| docker run -d    | will pull and directly run the image as a container in detached mode and it will give you the id of that container|
| docker start   | starts a container via container name / id                                                           |
| docker stop    | stops the container via container name / id                                                          |
| docker ps      | will show list of running containers                             |
| docker ps -a   | will show list of all containers                                 |
| docker exec-it | This will run the container                                                          |
| docker logs    | You can check logs to see if port is assigned properly etc                                                          |
| docker images    | To check what images are present |


# Docker sample command to run arch linux container

```bash
docker run --name ArchTest -dit -p 6000:6001 archlinux 
```

-  --name  --> Name of the container
-  -dit  --> run it in dettach mode and and with a interactive terminal 
-  -p  --> host_port : container_port

# How to check specific container logs 

docker logs container_id
