import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import { Avatar, Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { blue, green } from "@material-ui/core/colors";



const Reloder = () => (
  <>Let's add your details while we find best Matches for you</>
);
const Step1 = () => {
  const relation = [
    "Myself",
    "My Son",
    "My Daughter",
    "My Brother",
    "My Sister",
    "My Friend",
    "My Relative",
  ];

  const gender = [
    "Male", 
    "Female"
  ]
  const [click, setClick] = useState(-1);
  const [types, setTypes] = useState(-1);
  const handleTypeClick= (i) => {
        
  }
  return (
    <>
      <div className="text-3xl text-gray">This Profile is for</div>
      <div className="flex gap-4 flex-wrap">
        {relation.map((rel, i) => (
          <div className="" key={i}>
            <Chip
              icon={
                click != i ? (
                  <CircleIcon />
                ) : (
                  <CheckCircleRoundedIcon />
                )
              }
              label={rel}
              color="default"
              variant="outlined"
              onClick={() => setClick(i)}
            ></Chip>
          </div>
        ))}
      </div>

      <div className="text-3xl text-gray">Gender</div>
      
       {click == 0 && (
        <div className="flex flex-wrap">
       {gender.map((gen, i) => (
        <div className="" key={i}>
          <Chip
            icon={
              types != i ? (
                <CircleIcon />
              ) : (
                <CheckCircleRoundedIcon />
              )
            }
            label={gen}
            color="default"
            variant="outlined"
            onClick={() => handleTypeClick(i)}
          ></Chip>
        </div>
      ))}
      </div>)
    }
    </>
  );
};
// const Step1 = () => (
//   <>
//     <Field name="firstName" as={TextField} label="First Name" />
//     <Field name="lastName" as={TextField} label="Last Name" />
//   </>
// );

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
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
  }),
  Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
  }),
  Yup.object({
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
  }),
];

const Page = () => {

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handleBack = () => setCurrentStep(currentStep - 1);

  return (
    <div className="flex justify-center items-center"> 
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
        }}
        validationSchema={validationSchemas[currentStep]}
        onSubmit={(values) => {
          if (isLastStep) {
            console.log("Form Submitted", values);
          } else {
            handleNext();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {steps[currentStep]}
            <div className="flex justify-between w-80">
              <button
                onClick={handleNext}
                type="submit"
                disabled={isSubmitting}
              >
                {isLastStep ? "Submit" : "Next"}
              </button>
              {currentStep > 0 && (
                <button type="button" onClick={handleBack}>
                  Back
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;
