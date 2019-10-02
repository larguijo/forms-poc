import React from 'react';
import Select from 'react-select';
import { Formik, Field } from 'formik';
import { Form, Button, ButtonToolbar, Alert } from 'react-bootstrap';
import { SelectField } from './SelectField';

const FormikBasik = () => {
  const onSubmit = (values) => {
    console.log('values', values);
  };

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

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const validate = (values) => {
    let errors = {};

    if (!values.fullName) {
      errors.fullName = 'Required';
    }

    if (!values.lastCourseFinished) {
      errors.lastCourseFinished = "Required";
    }

    if (values.educationLevel === "3" && !values.careerName) {
      errors.careerName = "Carrer Name is required for superior studies";
    }

    if (!values.email) {
      errors.email = 'Required';
    } else {
      // Faking API call to get valid mail.
      console.log('Lets sleep');
      return sleep(2000).then(() => {
        console.log('Get up');
        if (!['rodriguez.arguijo@gmail.com', 'tanpalma04@gmail.com'].includes(values.email)) {
          errors.email = 'Your mail was not found';
        }
        console.log('errors', errors);
        if (Object.keys(errors).length) {
          throw errors;
        }
      });
    }

    if (Object.keys(errors).length) {
      throw errors;
    }

  }

  return (
    <React.Fragment>
      <h1>React Bootstrap plus Formik</h1>
      <Formik validate={validate} onSubmit={onSubmit}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
          isSubmitting,
          setFieldValue,
          setFieldTouched
        }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  isInvalid={errors.email} />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  placeholder="FullName"
                  isInvalid={errors.fullName} />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="educationLevel">
                <Form.Label>Education Level</Form.Label>
                <Form.Control as="select" value={values.educationLevel} onChange={handleChange}>
                  <option value="1">Basic</option>
                  <option value="2">Highschool</option>
                  <option value="3">Bachelor Degree</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="careerName">
                <Form.Label>Career Name</Form.Label>
                <Form.Control
                  name="careerName"
                  value={values.careerName}
                  onChange={handleChange}
                  placeholder="Enter Title"
                  isInvalid={errors.careerName} />
                <Form.Control.Feedback type="invalid">
                  {errors.careerName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="lastCourseFinished">
                <Form.Label>Last Course Finished</Form.Label>
                <Form.Control as="select" value={values.lastCourseFinished} onChange={handleChange} isInvalid={errors.lastCourseFinished}>
                  {!values.educationLevel && (<option value="">Select Value</option>)}
                  {values.educationLevel && (
                    courses[values.educationLevel].map(
                      course => <option key={`${values.educationLevel}_${course.id}`} value={course.id}>{course.label}</option>)
                  )}

                  <Form.Control.Feedback type="invalid">
                    {errors.lastCourseFinished}
                  </Form.Control.Feedback>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="hobbies">
                <Form.Label>Hobbies</Form.Label>
                <Field name="hobbies" component={SelectField} options={hobbies} />
                <Form.Control.Feedback type="invalid">
                  {errors.hobbies}
                </Form.Control.Feedback>
              </Form.Group>
              <ButtonToolbar>
                <Button variant="primary" size="md" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </ButtonToolbar>
              <Alert variant="warning">
                {JSON.stringify(values)}
              </Alert>

            </Form>
          )}
      </Formik>
    </React.Fragment>
  )
};

export default FormikBasik;

