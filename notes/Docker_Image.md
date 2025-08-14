---
id: Docker_Image
aliases: []
tags: []
created_date : 2025-08-13 18:30
---

# How to build a docker image 

![[../assets/imgs/Making a image.png]]

Furthur down the pipeline 

![[../assets/imgs/Docker Pipeline.png]]
## What is a dokcer file ? 

A docker file is a file that is a blueprint for images 

02:01:01


## Before creating a docker file you need to choose which image of node to take so take alpine image of node such that the linux commands can work 

![[../assets/imgs/Docker File.png]]

## Creating a docker file 

To create a docker file you need to give it the name Dockerfile only !

```Dockerfile
# Use Node 24 on Alpine Linux
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /home/app

# Copy the rest of the application files
COPY . /home/app

# Install dependencies
RUN npm install --production

# Run the app
CMD ["npm", "start"]
```

## Command to create the image 

```bash
docker build -t nodeapp:1.0 .
```

Note --> image name must be lowercase else it will throw this error 

`ERROR: invalid tag "Nodeapp:1.0": repository name must be lowercase`

-t --> This is tag name for image 
. --> int this current directory the Dockerfile is there take the file and build image  
