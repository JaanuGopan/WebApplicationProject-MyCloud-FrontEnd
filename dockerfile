# Use a specific tag for node version
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json (if available) for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
