# Dockerfile
# Docker container setup for the application

# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application files
COPY . ./

# Expose port and define the command to run the app
EXPOSE 5000
CMD ["npm", "start"]
