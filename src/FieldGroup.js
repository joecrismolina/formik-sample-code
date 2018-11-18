import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

const fieldGroup = (props) => {
  return (
      <FormGroup controlId="formValidationSuccess1" validationState={props.validationState}>
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl type={props.type} {...props}/>
        { props.helpText ? <HelpBlock>{props.helpText}</HelpBlock> : null }
      </FormGroup>
  );
}

export default fieldGroup;
