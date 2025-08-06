---
id: container ports vs machine ports
aliases: []
tags: []
---

# Container ports vs Machine ports 



![[../assets/imgs/Container_Ports_Host_Ports.png]]

***Always remember that when you run a container you need check its container port and vm port such that it doesn't clash with the same port on host*** 

To run a container on port the command is 

```bash
docker run --name ArchTest -dit -p 6000:6001 archlinux 
```
