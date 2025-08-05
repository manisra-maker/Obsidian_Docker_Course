---
id: Images_vs_Containers
aliases: []
tags: []
created_on: 2025-08-04T18:27:00
---

# What is a Image 

An image is a set of instructions that result in creation of container 

Think of a Docker image as a blueprint or recipe. It is a read-only template.

Contains everything needed to run a piece of software:

-   Your application code,
-   System tools,
-   Libraries,
-   Settings, etc.
-   Built from a Docker file.

# What is a container 

A container is a running instance of an image.

It's like a virtual machine, but much lighter.

It's based on an image, but you can run, modify, stop, or delete it.

When you start a container, Docker uses the image as the starting point.

## Container structure 

![[../assets/imgs/Container_Structure.png]]

## Container vs Image 

![[../assets/imgs/Image_vs_container.png]]

## How to run a docker container 

To run a docker container directly from docker hub we can give 

```bash
docker run postgres:9.6
```

If incase you need to download a specific version of postgres you can just docker run postgres:10.0

## Check docker container status 

```bash
docker ps
```


