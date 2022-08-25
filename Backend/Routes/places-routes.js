const express = require('express');

const router = express.Router();  //This is gives us the special Object on which we can also register middleware whichis filtered by HTTP method.

router.get('/', (req, res ,next) => {
    console.log('GET Request is working for PLACES.')
    res.json({message: 'It is working!!!'})
});

module.exports = router;