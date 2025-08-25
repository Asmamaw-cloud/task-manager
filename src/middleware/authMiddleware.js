const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // If no token provided, skip user check (for testing)
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      // Uncomment the next line to skip auth completely for testing
      // return next();

      // Or keep it protected
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return res.status(401).json({ message: 'User not found' });
    }

    next(); // Continue to controller
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(401).json({ message: 'Token is not valid' });
  }
};
