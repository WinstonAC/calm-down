const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Check if the `Authorization` header exists and extract the token
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Token missing from authorization header' });
    }

    try {
        // Ensure JWT_SECRET is defined and not undefined
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT secret is not defined in environment variables');
        }

        // Verify the token using the JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded token (user info) to request object
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.error('JWT verification error:', error.message); // Log the specific error message
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
