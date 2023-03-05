# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Set the environment variable to production
ENV NODE_ENV=production

# Expose port 3000 for the app to listen on
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
