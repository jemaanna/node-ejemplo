const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(require('../src/routes'));

app.listen(app.get('port'), () => {
    console.log('servidor esta corriendo en el puerto', app.get('port'));
})

