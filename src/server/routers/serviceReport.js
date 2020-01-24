const express = require('express')
const serviceReportController = require('../controllers/serviceReport')
const router = express.Router()


router.get('/', serviceReportController.getAllSerReport)

router.get('/:id', serviceReportController.getSerReportById)

router.post('/', serviceReportController.createSerReport)

router.put('/:id', serviceReportController.updateSerReportById)

router.delete('/:id', serReportController.deleteSerReportById)

module.exports = router