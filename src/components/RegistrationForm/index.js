import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameErr: false,
    showLastNameErr: false,
    showSuccessResult: false,
  }

  blankFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameErr: true})
    } else {
      this.setState({showFirstNameErr: false})
    }
  }

  blankLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({showLastNameErr: true})
    } else {
      this.setState({showLastNameErr: false})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameErr: true})
    }

    if (lastName === '') {
      this.setState({showLastNameErr: true})
    }

    if (firstName !== '' && lastName !== '') {
      this.setState({showSuccessResult: true})
    }
  }

  submitAnotherForm = event => {
    event.preventDefault()
    this.setState({showSuccessResult: false})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  render() {
    const {
      firstName,
      lastName,
      showFirstNameErr,
      showLastNameErr,
      showSuccessResult,
    } = this.state
    const firstnameClassname = `input-el ${showFirstNameErr ? 'error' : ''}`
    const lastnameClassname = `input-el ${showLastNameErr ? 'error' : ''}`
    return (
      <div className="registration-form-container">
        <h1 className="heading">Registration</h1>
        <div className="form-result-container">
          {showSuccessResult ? (
            <form className="form-container" onSubmit={this.submitAnotherForm}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-img"
              />
              <p className="success">Submitted Successfully</p>
              <button type="submit" className="custom-btn">
                Submit Another Response
              </button>
            </form>
          ) : (
            <form className="form-container" onSubmit={this.submitForm}>
              <div className="input-container">
                <label className="input-label" htmlFor="firstName">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="firstName"
                  className={firstnameClassname}
                  placeholder="First name"
                  value={firstName}
                  onChange={this.onChangeFirstName}
                  onBlur={this.blankFirstName}
                />
                {showFirstNameErr && <p className="error-message">Required*</p>}
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="lastName">
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={lastnameClassname}
                  placeholder="Last name"
                  value={lastName}
                  onChange={this.onChangeLastName}
                  onBlur={this.blankLastName}
                />
                {showLastNameErr && <p className="error-message">Required*</p>}
              </div>
              <button type="submit" className="custom-btn">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
