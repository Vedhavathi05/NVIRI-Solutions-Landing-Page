Thank you for providing the backend code. Here's the updated version of the `README.md` to include information about your SQLite backend setup:

---

# Service Booking App

This is a service booking app built with **React.js** for the frontend and a backend server powered by **Node.js**, **Express.js**, and **SQLite** for managing data, user authentication, and bookings. The app allows users to book services, view featured service providers, read customer reviews, and get in touch with service providers.

## Features

- **Service Listings**: Displays a list of available services (e.g., fridges, air conditioners, televisions, and gas stoves) with images and descriptions.
- **Book Request**: Users can book a service in three simple steps:
  1. Provide appliance details.
  2. Choose a technician.
  3. Get the appliance fixed.
- **Customer Reviews**: A section displaying customer feedback, including ratings and comments.
- **Featured Services**: Showcases popular service providers with their ratings, services, and reviews.
- **Get In Touch**: Provides contact options for users to get in touch and book a service.
- **User Authentication**: Users can log in or register to manage their bookings and profile.
- **Backend API**: The backend handles service requests, user data, bookings, and reviews, powered by an SQLite database.

## Technologies Used

### Frontend:
- **React.js** for building the user interface.
- **CSS** for styling the app.
- **React Router** for navigation (if applicable).
- **Axios** or **Fetch** for API calls (if applicable).

### Backend:
- **Node.js** and **Express.js** for creating the server and handling HTTP requests.
- **SQLite3** for storing user data, bookings, and reviews.
- **JWT (JSON Web Tokens)** for user authentication and authorization.

### Libraries and Tools:
- **SQLite3** for database interaction.
- **CORS** for handling cross-origin requests.
- **bcryptjs** for password hashing (if applicable).

## File Structure

```
src/
├── components/
│   ├── AllServices.js            # Service listing page
│   ├── BookRequest.js            # Request booking page
│   ├── CommentSection.js         # Customer reviews section
│   ├── FeaturedSection.js        # Featured services section
│   ├── GetInTouchSection.js      # Contact and footer section
├── images/
│   ├── Picture1.png
│   ├── Picture9.png
│   ├── Picture10.png
│   ├── Picture11.png
│   ├── Picture12.png
│   └── Picture13.png
├── App.js
├── index.js
├── index.css
└── README.md

backend/
├── controllers/                  # API route handlers
│   ├── authController.js         # User authentication
│   ├── serviceController.js      # Service-related actions
│   └── reviewController.js       # Review-related actions
├── models/                       # Database models
│   ├── User.js                   # User model
│   ├── Service.js                # Service model
│   └── Review.js                 # Review model
├── routes/                       # API routes
│   ├── authRoutes.js             # Authentication routes
│   ├── serviceRoutes.js          # Service routes
│   └── reviewRoutes.js           # Review routes
├── server.js                     # Entry point for the backend server
└── README.md                     # Backend information
```

## Backend Setup (SQLite)

1. Clone the repository:
    ```bash
    git clone <repository_url>
    ```

2. Navigate to the backend directory:
    ```bash
    cd backend
    ```

3. Install backend dependencies:
    ```bash
    npm install
    ```

4. Create and set up your **SQLite** database by running the following SQL commands to create necessary tables:

    ```sql
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
    );

    CREATE TABLE technicians (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        business_name TEXT NOT NULL
    );

    CREATE TABLE services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    );

    CREATE TABLE reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        service_id INTEGER,
        user_id INTEGER,
        rating INTEGER,
        comment TEXT,
        FOREIGN KEY (service_id) REFERENCES services(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
    ```

5. Create a `.env` file for sensitive information (like JWT secrets) in the backend directory:
    ```env
    JWT_SECRET=<your_jwt_secret_key>
    ```

6. Start the backend server:
    ```bash
    node server.js
    ```

The backend will now be running at `http://localhost:5000`.

## Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd service-booking-app
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

4. Visit `http://localhost:3000` in your browser to access the app.

## APIs (Backend)

### 1. User Login

- **Endpoint**: `POST /login`
- **Request body**: 
    ```json
    {
        "email": "user@example.com",
        "password": "password123"
    }
    ```
- **Response**: 
    ```json
    {
        "message": "Login successful."
    }
    ```

### 2. Technician Login

- **Endpoint**: `POST /biz-login`
- **Request body**: 
    ```json
    {
        "email": "tech@example.com",
        "password": "techpassword123",
        "businessName": "Tech Services"
    }
    ```
- **Response**: 
    ```json
    {
        "message": "Technician login successful."
    }
    ```

### 3. Service Listing

- **Endpoint**: `GET /services`
- **Response**: 
    ```json
    [
        {
            "id": 1,
            "name": "Fridge Repair",
            "description": "Fixing broken fridges.",
            "price": 50.00
        },
        ...
    ]
    ```

### 4. Reviews

- **Endpoint**: `GET /reviews/:serviceId`
- **Response**: 
    ```json
    [
        {
            "user_id": 1,
            "service_id": 1,
            "rating": 5,
            "comment": "Great service!"
        },
        ...
    ]
    ```

## Future Enhancements

- Implement real-time notifications for booking status updates.
- Add advanced features like scheduling and payment gateway integration.
- Implement role-based access control (Admin, Technician, User).
- Improve user experience with features like ratings for technicians.

## Contributing

Feel free to fork this repository and submit pull requests. If you find any bugs or have suggestions, please open an issue.

## License

This project is open-source and available under the MIT License.

---

This `README.md` now reflects the backend setup using **SQLite** and includes relevant details for running and interacting with your backend API. If you need further modifications, feel free to ask!
