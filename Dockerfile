# Use an official Node.js runtime as the parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port your app will run on
EXPOSE 3002

# Define the command to start your application
CMD ["npm", "run", "dev", "--", "--host"]

