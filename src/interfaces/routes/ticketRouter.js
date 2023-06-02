const express = require('express');
const container = require('../../infrastructures/container');
const TicketController = require('../controllers/TicketController');
const { authCheck } = require('../../commons/middlewares/auth');

const router = express.Router();
const ticketController = new TicketController(container);

router.post('/tickets', authCheck, ticketController.addTicket);

module.exports = router;