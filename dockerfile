#FROM node:20-alpine
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#EXPOSE 3000
#CMD ["npm", "start"]

# Use a specific tag for the node version
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json (if available) for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use a smaller base image for the final stage
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the build artifacts from the build stage
COPY --from=build /app/build ./build

# Install serve to serve the build directory
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the React application
CMD ["serve", "-s", "build", "-l", "3000"]

