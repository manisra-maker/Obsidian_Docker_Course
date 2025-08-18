---
id: Docker_volumes
aliases: []
tags: []
created_on : 2025-08-18 13:31
---

# Creating docker volumes 

If we have statefull applications  or where data must persist we use docker volumes

![[../assets/imgs/Docker Volumes.png]]
Here we mount the host file system with the docker file system 

So when docker container write it will write to host as well

## Docker volumes are of 3 types 

### -v 

```bash
docker run -v /home/mount/data:/var/lib/mysql/data
``` 

First is host file system and second is container 

next is just giving one path that will handle via  creating a file system inside the container 

Another one is giving -v name:/var/lib/mysql/data


Same thing inside a docker compose file 

![[../assets/imgs/Volumes in compose file.png]]


