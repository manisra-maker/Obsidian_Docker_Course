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

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . /home/app

# Run the app
CMD ["npm", "start"]
```
