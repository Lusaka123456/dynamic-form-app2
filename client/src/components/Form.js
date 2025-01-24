import React, { useState, useEffect } from 'react';
import { getServices, submitForm } from '../services/api';

function Form() {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        getServices().then(({ data }) => setServices(data));
    }, []);

    const handleSubmit = async () => {
        await submitForm({ serviceId: selectedService.id, submissionData: formData });
        alert('Form submitted successfully!');
    };

    return (
        <div>
            <h1>Dynamic Form</h1>
            <select onChange={(e) => setSelectedService(JSON.parse(e.target.value))}>
                <option value="">Select Service</option>
                {services.map((service) => (
                    <option key={service.id} value={JSON.stringify(service)}>
                        {service.name}
                    </option>
                ))}
            </select>

            {selectedService && selectedService.ServiceFields.map((field) => (
                <div key={field.id}>
                    <label>{field.field_label.en}</label>
                    <input type={field.field_type} onChange={(e) => setFormData({ ...formData, [field.field_name]: e.target.value })} />
                </div>
            ))}

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Form;
