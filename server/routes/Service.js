const express = require('express');
const { Service, ServiceField, Submission } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const services = await Service.findAll({ include: ServiceField });
    res.json(services);
});

router.post('/submit', async (req, res) => {
    const { serviceId, submissionData } = req.body;
    const service = await Service.findByPk(serviceId);
    if (!service) return res.status(404).json({ error: 'Service not found' });

    const submission = await Submission.create({ service_id: serviceId, submission_data: submissionData });
    res.json(submission);
});

module.exports = router;
