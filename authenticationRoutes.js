const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Define the API endpoints and map them to controller functions
router.get('/', accountController.getAllAccounts);
router.get('/:id', accountController.getAccountById);
router.post('/', accountController.createAccount);
router.put('/:id', accountController.updateAccount);
router.delete('/:id', accountController.deleteAccount);
// Add other endpoints as needed

module.exports = router;
