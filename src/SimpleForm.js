import React, { Component } from 'react';
import FieldGroup from './FieldGroup';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';
import { Formik } from 'formik';
import * as Yup from 'yup';

const initialFormValues = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  birthdate: undefined,
  favoriteNumber: undefined
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('username is required')
    .max(20, 'username too long (3-20 chars)')
    .min(3, 'username too short (3-20 chars)'),
  password: Yup.string()
    .required('password is required')
    .min(6, 'password is too short')
    .max(255, 'password is too long'),
  confirmPassword: Yup.string()
    .required('it does not match input password'),
  email: Yup.string()
    .required('email is required')
    .email('invalid email format'),
  birthdate: Yup.date()
    .required('birthdate is required'),
  favoriteNumber: Yup.number()
    .required('please tell us your favorite number')
    .positive('should be a positive integer')
    .integer('should be a positive integer')
});


// const ErrorSummary = (props) => {
//   return (
//      Object.keys(props.errors).length > 0 && Object.keys(props.touched).length > 0 ?
//         (<Alert bsStyle="danger">
//           <h4>Oops!</h4>
//           <ul>
//             {Object.keys(props.errors).map( function(k, index){                
//               let ret = props.touched[`${k}`] ? (<li key={k}>{props.errors[`${k}`]}</li>) : (null)
//               return ret;
//             })}
//           </ul>
//         </Alert>)
//         : null
//   )
// }


const ErrorSummary = (props) => {
  return (
     Object.keys(props.errors).length > 0 ?
        (<Alert bsStyle="danger">
          <h4>Oops!</h4>
          <ul>
            {Object.keys(props.errors).map( function(k, index){                
              return (<li key={k}>{props.errors[`${k}`]}</li>)
            })}
          </ul>
        </Alert>)
        : null
  )
}

const FormikForm = (initialValues, validationSchema, onSubmit) => {
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      render={({
          values,
          errors,
          status,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <h2>Sample Form</h2>
            <ErrorSummary errors={errors} touched={touched}/>
            <FieldGroup 
              name="username"
              label="User Name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              helpText={errors.username && touched.username ? errors.username : undefined}
              validationState={errors.username && touched.username ? "error" : null}
              required
            />
            <FieldGroup 
              name="email"
              label="Email"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              helpText={errors.email && touched.email ? errors.email : undefined}
              validationState={errors.email && touched.email ? "error" : null}
              required
            />
            <FieldGroup 
              name="birthdate"
              label="Birthdate"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.birthdate}
              helpText={errors.birthdate && touched.birthdate ? errors.birthdate : undefined}
              validationState={errors.birthdate && touched.birthdate ? "error" : null}
              required
            />
            <FieldGroup 
              name="favoriteNumber"
              label="Favorite Number"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.favoriteNumber}
              helpText={errors.favoriteNumber && touched.favoriteNumber ? errors.favoriteNumber : undefined}
              validationState={errors.favoriteNumber && touched.favoriteNumber ? "error" : null}
              required
            />
            <FieldGroup 
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              helpText={errors.password && touched.password ? errors.password : undefined}
              validationState={errors.password && touched.password ? "error" : null}
              required
            />
            <FieldGroup 
              name="confirmPassword"
              label="Re-type Password"
              type="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              helpText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : undefined}
              validationState={errors.confirmPassword && touched.confirmPassword ? "error" : null}
              required
            />
            <Button type="submit" bsStyle='primary'>Submit</Button>
          </form>  
        )}
    />
  )
}

class SimpleForm extends Component {

  render () {
    return (
      FormikForm(initialFormValues, validationSchema, (values, actions) => alert(values)) 
    )
  }
}

export default SimpleForm;