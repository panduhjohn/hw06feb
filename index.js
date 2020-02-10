const express = require('express');
const chalk = require('chalk');
const app = express();

const users = require('./models/Users')

const userRoutes = require('./routes/userRoutes')

const port = process.env.PORT || 3000;

// to collect info
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(chalk.blueBright(`App listening on ${port}`));
})
