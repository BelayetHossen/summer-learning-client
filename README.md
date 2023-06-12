# Summer language learning

Welcome to the Summer language learning repository! This repository contains the code and design files for a visually appealing website that offers a platform for online classes. The website provides features such as registration and login, class browsing and selection, instructor profiles, and user dashboards. It is designed to be user-friendly and aesthetically pleasing.

## Features

- Registration and Login System: Users can create accounts and log in using their email and password. Social login options are also available for convenience.

- Homepage: The homepage includes a top slider section with relevant information and images. It also showcases popular classes and instructors, as well as an extra section with attractive elements and animation effects.

- Instructors Page: Displays a list of all instructors, including their name, email, and optional information such as the number and names of classes they teach. Users can also view classes taught by each instructor.

- Classes Page: Shows all approved classes, including their image, name, instructor name, available seats, and price. Users can select classes, but the selection button is disabled under certain conditions. The class card background turns red if no seats are available.

- Student Dashboard: Accessible only to students, this dashboard displays selected and enrolled classes. Students can view relevant information, delete selected classes, and proceed to payment for selected classes.

- Payment: After clicking the "Pay" button on the student dashboard, users are redirected to the payment page to finalize their payment. Successful payments result in enrollment in the chosen class.

- Payment History: Students can view their payment history, which is sorted in descending order, with the latest payment at the top.

- Instructor Dashboard: This private dashboard is accessible only to instructors. It includes the ability to add classes and manage existing classes. Instructors can view their added classes, including pending/approved/denied status, the total number of enrolled students, and feedback from the admin.

- Admin Dashboard: This private dashboard is accessible only to administrators. It allows the management of classes and users. Admins can approve or deny classes, send feedback to instructors, and view and modify user roles.

## Installation

1. Clone the repository: `git clone https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-BelayetHossen.git`
2. Install dependencies: `npm install`
3. Configure the environment variables:
   - Create a `.env` file in the root directory.
   - Define the necessary environment variables, such as database connection details and authentication keys.
4. Start the development server: `npm start`
5. Open the website in your browser at `http://localhost:3000`

## Technologies Used

- HTML5, CSS3, JavaScript, Tailwind css
- React.js
- Meterial UI
- Node js
- Mongo DB
- Express

## Technologies Used
Live Link: https://summer-learning.web.app/