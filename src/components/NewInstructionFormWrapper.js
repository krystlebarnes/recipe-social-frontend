import React from 'react';
import InstructionForm from './InstructionForm.js'
import { addInstruction } from '../actions/addInstruction.js'
import { connect } from 'react-redux'

const NewInstructionFormWrapper = ({ history, addInstruction }) => {

  const handleSubmit = (formData, recipeId) => {
    addInstruction({
      ...formData,
      recipeId
    }, history)
  }
  return  <InstructionForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { addInstruction })(NewInstructionFormWrapper);