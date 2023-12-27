# E-Commerce Application

This is an eCommerce application built with JavaScript and Node.js. It provides a platform for users to browse products, add them to their cart, and complete transactions.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Product catalog with search and filtering options
- Shopping cart functionality
- Secure payment processing
- Order management
- Admin panel for managing products, orders, and users

## Prerequisites

Make sure you have the following prerequisites installed on your machine:

- Node.js 
- npm 
- 

## Installation

1. Clone the repository:

   ````shell
   git clone https://github.com/Misganaw-K/E-shop/E-shop.git
   ```

2. Navigate to the project directory:

   ````shell
   cd E-shop
   ```

3. Install the dependencies:

   ````shell
   npm install
   ```

4. Set up environment variables:
   
   - Create a `.env` file in the root directory of the project.
   - Define the following environment variables in the `.env` file:
     - `DB_HOST`: MongoDB connection string
     - `JWT_SECRET`: Secret key for JSON Web Tokens
     - `PAYMENT_API_KEY`: API key for payment processing service

5. Set up the database:
   
   - 

6. Build and start the server:

   ````shell
   npm start
   ```

7. The application should now be running at `http://localhost:3000`.

## Usage

- Visit `http://localhost:3000` in your web browser to access the application.
- Create an account or log in with existing credentials.
- Browse the product catalog, add items to your cart, and proceed to checkout.
- Complete the payment process using the provided payment method.

## Contributing

Contributions are welcome! If you find any issues or would like to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
@misganaw 2023

---
