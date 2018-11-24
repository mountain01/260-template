const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const db = require('./db');

// ======== Static stuff ======== \\
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/angular', express.static(path.join(__dirname, 'node_modules/angular')));
app.use('/router', express.static(path.join(__dirname, 'node_modules/@uirouter/angularjs/release')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

// =========== Routing =========== \\
const MainRoutes = require('./routes/main.route');
app.use('/main', MainRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  db.once('open', () => {
    console.log(`Connection esatblished`);
  });
});