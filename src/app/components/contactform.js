
import React, { useState } from 'react';
import './contactform.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { scale } = useSpring({
    scale: inView ? 1 : 0,
    from: { scale: 0 },
    config: { duration: 700 },
  });


  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    servicio: 'Nutrición Clínica',
    telefono: '',
    motivoConsulta: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('http://localhost:5001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        console.log('Email sent successfully');
        // Optionally, reset the form after successful submission
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          servicio: 'Nutrición Clínica',
          telefono: '',
          motivoConsulta: '',
        });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <animated.form style={{ transform: scale.to((s) => `scale(${s})`) }} ref={ref} onSubmit={handleSubmit}>
      <div className="nombreapellidoswrapper">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder='Nombre*'
          required
        />


        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder='Apellido'
        />


      </div>


      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder='E-mail*'
        required
      />


      <div className="serviciotelefonowrapper">
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder='Teléfono'
        />


        <select
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          placeholder='Servicio*'
        >
          <option value="" disabled>Selecciona un servicio</option>
          <option value="Nutrición Clínica">Nutrición Clínica</option>
          <option value="Nutrición Deportiva">Nutrición Deportiva</option>
          <option value="Pérdida de Peso">Pérdida de Peso</option>
        </select>

      </div>


      <div className="motivoconsultawrapper">
        <textarea
          name="motivoConsulta"
          value={formData.motivoConsulta}
          onChange={handleChange}
          placeholder='Motivo de la consulta*'
        />

      </div>


      <button type="submit">Enviar</button>
    </animated.form>
  );
};

export default ContactForm;

