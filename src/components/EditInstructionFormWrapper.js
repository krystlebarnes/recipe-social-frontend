import React from 'react';
import { connect } from 'react-redux'
import InstructionForm from './InstructionForm.js'
import { editInstruction } from '../actions/editInstruction.js' 
import { deleteInstruction } from '../actions/deleteInstruction.js'
import { setFormData, resetInstructionForm } from '../actions/instructionForm.js'


class EditInstructionFormWrapper extends React.Component {
  componentDidMount(){
    this.props.instruction && this.props.setFormData(this.props.instruction)
  }

  componentDidUpdate(prevProps) {
    this.props.instruction && !prevProps.instruction && this.props.setFormData(this.props.instruction)
  }

  componentWillUnmount() {
    this.props.resetInstructionForm()
  }

  handleSubmit = (formData) => {
    const { editInstruction, instruction, history } = this.props
    editInstruction({
      ...formData,
      instructionId: instruction.id
    }, history)
  }

  render() {
    const { history, deleteInstruction, instruction } = this.props
    const instructionId = instruction ? instruction.id : null
    return  <>
              <InstructionForm editMode handleSubmit={this.handleSubmit} />
              <button onClick={()=>deleteInstruction(instructionId, history)}>Delete</button>
            </>
  }
};

export default connect(null, { editInstruction, setFormData, resetInstructionForm, deleteInstruction })(EditInstructionFormWrapper);
