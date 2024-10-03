const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');
const fs = require('fs'); // fs module for working with files

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ['https://gudokvlad.netlify.app', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

app.use(cors({
  origin: ['https://gudokvlad.netlify.app', 'http://localhost:3000'],
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));


app.get("/activities", (req, res) => {
    fs.readFile('./activities.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading activities.json:', err);
        res.status(500).send('Internal Server Error');
      } else {
        const activities = JSON.parse(data);
        res.json(activities);
      }
    });
  });

  app.get("/experiences", (req, res) => {
    fs.readFile('./experiences.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading experiences.json:', err);
        res.status(500).send('Internal Server Error');
      } else {
        const experiences = JSON.parse(data);
        res.json(experiences);
      }
    });
  });

  app.get("/projects", (req, res) => {
    fs.readFile('./projects.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading proejects.json:', err);
        res.status(500).send('Internal Server Error');
      } else {
        const projects = JSON.parse(data);
        res.json(projects);
      }
    });
  });

server.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
