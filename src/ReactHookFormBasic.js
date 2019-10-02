import React, { useState } from "react";
import useForm from "react-hook-form";
import { Form, Button, ButtonToolbar, Alert } from 'react-bootstrap';
import Select from 'react-select';

const ReactHookFormBasic = () => {
  const { register, handleSubmit, errors, watch, getValues, setValue } = useForm();
  const educationLevel = watch("educationLevel");
  const [hobbiesValue, setHobbiesValue] = useState({ selectedOption: [] });

  const handleMultiChange = selectedOption => {
    setValue("hobbies", selectedOption)
    setHobbiesValue({ selectedOption })
  }

  React.useEffect(() => {
    register({ name: "hobbies" })
  }, [register]);

  const courses = {
    "1": [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
      { id: "3", label: "3" },
      { id: "4", label: "4" },
      { id: "5", label: "5" },
      { id: "6", label: "6" },
    ],
    "2": [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
      { id: "3", label: "3" },
    ],
    "3": [
      { id: "1", label: "1" },
      { id: "2", label: "2" },
      { id: "3", label: "3" },
      { id: "4", label: "4" },
      { id: "5", label: "5" },
    ]
  }

  const hobbies = [
    { value: "Sports", label: "Sports" },
    { value: "Music", label: "Music" },
    { value: "Reading", label: "Reading" }
  ];

  const values = getValues();

  console.log('errors', errors);

  const onSubmit = (values) => {
    console.log('values', values);
  };

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <React.Fragment>
      <h1>React-Hook-Form Bootstrap</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
            isInvalid={errors.email}
            ref={register(
              {
                required: true,
                validate: async value => {
                  await sleep(2000);
                  return ['rodriguez.arguijo@gmail.com', 'tanpalma04@gmail.com'].includes(values.email);
                }
              })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email && errors.email.type === 'required' && 'Required'}
            {errors.email && errors.email.type === 'validate' && 'e-mail not found'}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="fullName"
            placeholder="Full Name"
            isInvalid={errors.fullName}
            ref={register({ required: true })}
          />
          <Form.Control.Feedback type="invalid">
            Required
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Education Label</Form.Label>
          <Form.Control
            as="select"
            name="educationLevel"
            ref={register}>
            <option value="1">Basic</option>
            <option value="2">Highschool</option>
            <option value="3">Bachelor Degree</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="careerName">
          <Form.Label>Career Name</Form.Label>
          <Form.Control
            name="careerName"
            placeholder="Enter Title"
            ref={register}
            isInvalid={errors.careerName} />
          <Form.Control.Feedback type="invalid">
            {errors.careerName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="lastCourseFinished">
          <Form.Label>Last Course Finished</Form.Label>
          <Form.Control
            as="select"
            name="lastCourseFinished"
            ref={register}
            isInvalid={errors.lastCourseFinished}>
            {!educationLevel && (<option value="">Select Value</option>)}
            {educationLevel && (
              courses[educationLevel].map(
                course => <option key={`${educationLevel}_${course.id}`} value={course.id}>{course.label}</option>)
            )}

            <Form.Control.Feedback type="invalid">
              {errors.lastCourseFinished}
            </Form.Control.Feedback>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="hobbies">
          <Form.Label>Hobbies</Form.Label>
          <Select
            options={hobbies}
            value={hobbiesValue.selectedOption}
            onChange={handleMultiChange}
            isMulti
          />
          <Form.Control.Feedback type="invalid">
            {errors.hobbies}
          </Form.Control.Feedback>
        </Form.Group>
        <ButtonToolbar>
          <Button variant="primary" size="md" type="submit">
            Submit
        </Button>
        </ButtonToolbar>
        <Alert variant="warning">
          {JSON.stringify(values)}
        </Alert>
      </Form>
    </React.Fragment>
  );
}

export default ReactHookFormBasic;