# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend  App using React with Typescript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Typescript
  - React
  - Tailwind css

## Deployment

The application is deployed on netlify and can be accessed [here](https://reachinbox-frontend.netlify.app/).

## Demo Video :- 
will be uploaded soon...

## Login Page

![Login_Page](https://github.com/user-attachments/assets/93a7cbf4-ef5c-4fcd-8a06-444e4394eefa)

## Landing Page

![Landing_Page](https://github.com/user-attachments/assets/d7de8e09-327b-4a59-8e53-a28cbd6492f2)

## Deshboard with Dark Mode

 ![Dashboard](https://github.com/user-attachments/assets/da471f27-524d-486a-b52b-79c05ce075c6)

## Dashboard with Light Mode

![Dashboard_light](https://github.com/user-attachments/assets/f643ddaf-2737-4d1b-9d57-e37b887a9278)

## Delete Email(By Clicking D)

![Delete](https://github.com/user-attachments/assets/82a4b5ba-094c-4f18-a78b-a6c7c7903d93)

## Reply to Email (By Clicking R)

![reply](https://github.com/user-attachments/assets/fc3cd407-31ae-4332-bc91-0a8e45af0343)



 # How to Run <br/>
 
   <h2>Installation</h2>
   
   Clone the repository:   ``` https://github.com/Shahnawaj01/Reachinbox-Frontend-assign ``` <br/>
   Navigate to the project directory:   ``` cd reachinbox ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:3000 ``` <br/>
   

   ## Features 
   
  - Authentication
  - Get Emails
  - Post (send) Email
  - Delete Email


   <h2>Endpoints</h2>
   <h3>All Emails</h3>
   <pre><code>GET {{baseurl}}/onebox/list </code></pre>

   <h3>All Emails from Onebox</h3>
   <pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <h3>Add Onebox Mail</h3>
   <pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

   <h3>Delete Email</h3>
   <pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

 
   # Credits <br/>
   This project was developed by ```Shahnawaz Ansari``` 

   <p>Feel free to explore and integrate these endpoints into your application.</p>
  
