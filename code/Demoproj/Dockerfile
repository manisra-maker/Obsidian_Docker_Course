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
