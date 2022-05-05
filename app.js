const express = require('express');
const authRouter = require('./Routes/authRoutes');
const DbConnection = require('./DBConnection/mongoDb');
const passport = require('./Authentication/googleLogin');
const app = express();
const PORT = 9111;


app.use(authRouter);
app.use(passport.initialize());

app.listen(PORT, () => {
    new DbConnection();
    console.log(`Server is running on Port no. ${PORT}`);
});