const express = require('express')
const serviceReportController = require('../controller/serviceReport')
const router = express.Router()


router.get('/api/reports', serviceReportController.getAllSerReport)

router.get('/:id', serviceReportController.getSerReportById)

router.post('/', serviceReportController.createSerReport)

router.put('/:id', serviceReportController.updateSerReportById)

router.delete('/:id', serviceReportController.deleteSerReportById)

module.exports = router