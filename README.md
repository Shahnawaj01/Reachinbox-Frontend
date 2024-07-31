# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend  App using React with Typescript for an assignment given by Reachinbox.

## Features

- **Login Page**: Implements user authentication using Google Login.
- **Onebox Screen**: Displays a list of items fetched from the API.
- **Keyboard Shortcuts**: Supports "D" for delete and "R" for reply.
- **Custom Text Editor**: Includes custom buttons like "SAVE" and "Variables".
- **Reply Functionality**: Allows sending replies via the API.
- **Light/Dark Mode**: Toggle between light and dark themes.

## Technologies Used ( Frontend )
- ReactJS
- NextJS
- TailwindCSS
- Axios
- NextAuth
  
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



 # Setup Instructions <br/>
 
   <h2>Installation</h2>
   
   Clone the repository:   <code> https://github.com/Shahnawaj01/Reachinbox-Frontend-assign </code> <br/>
   Navigate to the project directory:   ``` cd reachinbox ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:3000 ``` <br/>

  <h2> Create a .env.local file with the following variables:</h2>
   GOOGLE_CLIENT_ID=your-google-client-id <br>
  GOOGLE_CLIENT_SECRET=your-google-client-secret <br>
  NEXTAUTH_SECRET=your-nextauth-secret <br>

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

  
