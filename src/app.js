require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authCandidat = require('./routes/auth_candidat');
const authAdmin = require('./routes/auth_admin');
const agentAuth = require('./routes/agent_auth');
const docAuth = require('./routes/doc_auth');
const doc = require('./routes/doctor');
const flights = require('./routes/flights');
const agentInfos = require('./routes/agent_infos');
const registration = require('./routes/registration');
const profile = require('./routes/profile');
const hadjInfo=require('./routes/hadj_info');
const tirage=require('./routes/tirage');
const notification=require('./routes/notification');
const hotels = require('./routes/hotels');
const payment=require('./routes/payment');
const statistics=require('./routes/statistics');
const app = express();

// Use CORS middleware
const allowedOrigins = ['http://localhost:3001']; // Adjust this to your frontend origin
const corsOptions = {
  origin: allowedOrigins,
  credentials: true // Allow credentials (cookies) to be sent
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/tirage',tirage );
app.use('/hadjInfo',hadjInfo );
app.use('/authAdmin', authAdmin);
app.use('/authAgent', agentAuth);
app.use('/agentInfos', agentInfos);
app.use('/profile', profile);
app.use('/authCnadidat', authCandidat);
app.use('/registration', registration);
app.use('/notification',notification);
app.use('/doc_auth',docAuth);
app.use('/doctor',doc);
app.use('/flights',flights);
app.use('/payment',payment);
app.use('/statistics',statistics);
app.use('/hotel',hotels);
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});






