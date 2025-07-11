# Use an official Nginx image to serve static content
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy your static calculator files into the container
COPY index.html .
COPY style.css .
COPY script.js .

# Expose default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
