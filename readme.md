# Location/Address Flow Application

A React and Node.js application for managing delivery locations with Google Maps integration.

## Features

- Location permission handling
- Current location detection
- Address search with Google Maps
- Interactive map pin adjustment
- Address form with categorization
- Saved addresses management
- Responsive design

## Tech Stack

- Frontend: React
- Backend: Node.js
- Maps: Google Maps API
- State Management: Redux/Context API

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/location-flow-app
cd location-flow-app
```

2. Install dependencies:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
npm install
```

3. Environment setup:
   - Create `.env` files in both frontend and backend directories
   - Add required environment variables:

```
# Frontend .env
REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key
REACT_APP_API_URL=http://localhost:5000

# Backend .env
PORT=5000
JWT_SECRET=your_jwt_secret
```

4. Start the application:

```bash
# Start backend
npm start

# Start frontend (new terminal)
cd frontend
npm start
```

## API Documentation

### Authentication

- POST `/api/v1/register`: User registration
- POST `/api/v1/login`: User login

### Addresses

- GET `/api/addresses`: Fetch saved addresses
- POST `/api/addresses`: Save new address
- PUT `/api/addresses/:id`: Update address
- DELETE `/api/addresses/:id`: Delete address

## Testing

Run tests with:

```bash
npm test
```

## Deployment

The application can be deployed using platforms like Heroku, Vercel, or AWS.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License

MIT License - feel free to use and modify for your purposes.
