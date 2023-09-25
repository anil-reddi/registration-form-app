import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    isFormSubmitted: false,
    firstNameError: false,
    lastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  renderFirstName = () => {
    const {firstNameInput, firstNameError} = this.state
    const inputText = firstNameError ? 'input-field error' : 'input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={inputText}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastNameError: false})
    }
  }

  renderLastName = () => {
    const {lastNameInput, lastNameError} = this.state
    const inputText = lastNameError ? 'input-field error' : 'input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={inputText}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstNameInput, lastNameInput} = this.state

    if (firstNameInput !== '' && lastNameInput !== '') {
      this.setState({isFormSubmitted: true})
    } else if (firstNameInput === '' && lastNameInput !== '') {
      this.setState({firstNameError: true, lastNameError: false})
    } else if (firstNameInput !== '' && lastNameInput === '') {
      this.setState({firstNameError: false, lastNameError: true})
    } else if (firstNameInput === '' && lastNameInput === '') {
      this.setState({firstNameError: true, lastNameError: true})
    } else {
      this.setState({
        firstNameError: false,
        lastNameError: false,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {firstNameError, lastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstName()}
        {firstNameError && <p className="error-msg">Required</p>}
        {this.renderLastName()}
        {lastNameError && <p className="error-msg">Required</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmission = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p>Submitted Successfully</p>
      <button
        className="submit-btn"
        type="button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="card-container">
          {isFormSubmitted
            ? this.renderSubmission()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
