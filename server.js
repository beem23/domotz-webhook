const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3005;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle incoming webhook POST requests
app.post('/webhook', (req, res) => {
    const alert = req.body;

    // Log the received alert
    console.log('Received Domotz alert:', alert);

    // Parse and handle the alert as needed
    // For example, you can extract specific data:
    const alertType = alert.type;
    const alertMessage = alert.message;

    console.log(`Alert Type: ${alertType}`);
    console.log(`Alert Message: ${alertMessage}`);

    // Send a response back to Domotz
    res.status(200).send('Alert received');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
