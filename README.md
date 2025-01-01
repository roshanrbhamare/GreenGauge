# GreenGauge 🌱  
**Empowering sustainable choices with data-driven insights**  

GreenGauge is an interactive web application designed to help individuals measure their ecological footprint and make informed decisions to promote sustainability. By answering a series of lifestyle-related questions, users can visualize their environmental impact and receive personalized solutions to reduce it.  

---

## Table of Contents  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup Instructions](#setup-instructions)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [License](#license)  
- [Author](#author)  

---

## Features  
- **Interactive Questionnaire**: Collects user inputs across categories like housing, transport, and lifestyle.  
- **Dynamic Results Page**: Summarizes user scores and offers actionable recommendations.  
- **Clean and Modular Design**: Powered by EJS templates for a seamless user experience.  
- **Solutions Section**: Detailed solutions to improve the ecological footprint for each question.  

---

## Tech Stack  
- **Frontend**: HTML, CSS, JavaScript, EJS  
- **Backend**: Node.js, Express.js  
- **Template Engine**: EJS with ejs-mate for layouts  
- **Other Dependencies**: express-ejs-layouts  

---

## Setup Instructions  

1. Clone the repository:  
   git clone https://github.com/roshanrbhamare/GreenGauge.git
   
Install dependencies:
npm install

Start the development server:
node index.js

Open your browser and navigate to:
http://localhost:8080

Usage
Start the application.
Answer the questions presented in the quiz.
View your ecological footprint on the results page.
Explore personalized solutions for each question.

Folder Structure
GreenGauge/
├── views/                     # EJS templates
│   ├── questions/             # Templates for each question and results
│   ├── layouts/               # Layout templates
├── public/                    # Static assets (CSS, images, etc.)
├── index.js                   # Main application logic
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation

License
This project is licensed under the MIT License. See the LICENSE file for details.
