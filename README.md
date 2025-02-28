# UoM-Social-Media  
**Main Landing Page**  
https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22Screenshot%202025-02-27%20194009.png%22%2C%22type%22%3A%22image%2Fpng%22%2C%22signedurl_expire%22%3A%222028-02-28T01%3A41%3A28.978Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2Fd22c8e757513477e%2FScreenshot%25202025-02-27%2520194009.png%3FExpires%3D1835314889%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DG1UY8cak0Yl9LtZGhuw~p6NYb7iKEDGtgcDgOEdm9azl2UzU2hNS8Tq6R51FJ-cs1JH2JX071JdXoROyU0jvie~jZHtiUC7tbHcsActjRRnx42Lajkgd8p7LCElR-xshpYO0jbe8XE0Mz90jsryqk10Ftfiy~o8svSr7O7y7eke5t4DE-QNQ3xaBtteE3qh3cXWPbu32DgikX8MBJrU7l1FzgXXuOCL~BrIrEbh5qAZNgzNSKuC32dt62N-~Qd9PKvUlyhkoZ7b66WWsYuFF61FQkDwweZD93u99oX3Y7RBhi8CVRiSRMgSEj0YdXywGuwqyB7MH-azHrNCXCA16bA__%22%7D

## Inspiration  
With so much happening across the University of Manitoba, students often struggle to stay connected and engaged with campus life. We created `UoM-Social-Media` to bridge that gap, providing a platform where students can share updates, discover community posts, and connect with peers seamlessly.

## How We Built It  
We crafted this project using Django, a robust Python framework, to power the backend and handle user authentication, content management, and API endpoints. For the frontend, we leveraged React paired with Tailwind CSS to deliver a responsive and intuitive user interface. PostgreSQL serves as our database, ensuring reliable and scalable data storage.

## Challenges We Ran Into  
Early on, we grappled with designing a scalable database schema to handle dynamic social media content. Balancing performance with real-time updates was tricky, but switching to PostgreSQL and optimizing our queries helped us overcome this hurdle.

## Accomplishments We're Proud Of  
We’re thrilled to have built a functional prototype that supports core social media features—posting, commenting, and user profiles—in a short timeframe. The clean integration of Django and React also stands out as a win for rapid development.

## What We Learned  
This project deepened our understanding of full-stack development, particularly how Django’s ORM simplifies backend logic and how React’s component-based structure speeds up UI creation. We also learned the importance of responsive design and efficient API design for a smooth user experience.

## What's Next for UoM-Social-Media  
Looking ahead, we aim to elevate the platform by:  
- Adding real-time notifications and messaging features  
- Enhancing user customization options for profiles  
- Implementing advanced search and filtering for posts  
- Improving accessibility and performance based on user feedback
- Including Mistral Ai for better matching systems 

## Built With  
- **Django** - Backend framework  
- **Python** - Core programming language  
- **React** - Frontend library  
- **PostgreSQL** - Database management  
- **Tailwind CSS** - Styling framework  
- **JavaScript** - Frontend interactivity  

## Try It Out Locally 🚀  
1. Clone the repository: `git clone https://github.com/atherjnoor/UoM-Social-Media.git`  
2. Install dependencies:  
   - Backend: `pip install -r requirements.txt`  
   - Frontend: `cd frontend && npm install`  
3. Set up the database (PostgreSQL recommended) and update configurations in `settings.py`.  
4. Run the app:  
   - Backend: `python manage.py runserver`  
   - Frontend: `npm start`  
5. Visit `http://localhost:3000` to explore!  
