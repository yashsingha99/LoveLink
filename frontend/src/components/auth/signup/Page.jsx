import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@material-ui/core';
import * as Yup from 'yup';

const Step1 = () => (
  <>
    <Field name="firstName" as={TextField} label="First Name" />
    <Field name="lastName" as={TextField} label="Last Name" />
  </>
);

const Step2 = () => (
  <>
    <Field name="email" as={TextField} label="Email" />
    <Field name="phone" as={TextField} label="Phone" />
  </>
);

const Step3 = () => (
  <>
    <Field name="address" as={TextField} label="Address" />
    <Field name="city" as={TextField} label="City" />
  </>
);

const steps = [<Step1 />, <Step2 />, <Step3 />];

const validationSchemas = [
  Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
  }),
  Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
  }),
  Yup.object({
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
  }),
];

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
     setCurrentStep(currentStep + 1)
  };
  const handleBack = () => setCurrentStep(currentStep - 1);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
      }}
      validationSchema={validationSchemas[currentStep]}
      onSubmit={(values) => {
        if (isLastStep) {
          console.log('Form Submitted', values);
        } else {
          handleNext();
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {steps[currentStep]}
          <div className='flex justify-between w-80'>
            <button onClick={handleNext} type="submit" disabled={isSubmitting}>
              {isLastStep ? 'Submit' : 'Next'}
            </button>
            {currentStep > 0 && <button type="button" onClick={handleBack}>Back</button>}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Page;
