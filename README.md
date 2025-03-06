 Overview

The Sports Equipment Rental System is a web-based application that allows users to rent and manage sports equipment seamlessly. 
It provides an intuitive interface for customers to browse, rent, and return equipment, while administrators can manage inventory,
track rentals, and handle customer requests efficiently.

For Users:
Browse available sports equipment
Rent equipment online
View rental history and status
Return rented equipment
Search and filter items

For Admins:
Add, update, and remove equipment
Manage rental requests
Track inventory
View rental history and analytics

Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ORM)
API Testing: Thunder Client/Postman
Authentication: JWT / OAuth

 API Endpoints

1️ Equipment Management

Get All Equipment → GET /equipment
Get Equipment by ID → GET /equipment/:id
Add Equipment → POST /equipment
Update Equipment → PUT /equipment/:id
Delete Equipment → DELETE /equipment/:id

2️ Rental Management

Rent Equipment → POST /rent
Get Rental Details → GET /rent/:id
Return Equipment → PUT /rent/:id/return

Setup and Installation

1️ Clone the repository:
git clone https://github.com/your-repo/sports-equipment-rental.git
cd sports-equipment-rental

2️ Install dependencies:
npm install

3️ Start the server:
nodemon server.js

4️ Open Thunder Client/Postman and test the endpoints.

Future Enhancements

Payment Integration (Razorpay/Stripe)
AI-based recommendations for users
Mobile app support
Reviews and rating system

Contribution
Feel free to contribute to this project! Fork the repository, create a new branch, and submit a pull request.

License
This project is licensed under the MIT License.
