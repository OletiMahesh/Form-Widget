import React from 'react';
import styled from 'styled-components';
import './index.scss';

const Title = styled.h2`
   color: ${({ theme }) => theme.colors.text};
`;

const SubmitBtn = styled.button`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: ${props => props.color ? props.color : "transparent"};
    border: 1px solid transparent;
    border-color: ${props => props.color ? props.color : "transparent"};
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const SignupBtn = styled.button.attrs(props => ({
    type: "button",
  }))`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    background-color: ${(props) => {
      console.log(props)
      console.log(props.theme.colors.button.background)
      return props.theme.colors.button.background
      }
    };
    border: ${({ theme }) => `1px solid ${theme.colors.button.background}`};
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    // border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

function Form(props) {
  console.log(props);
  const {color} = props;
  console.log(color);
  // const signup = () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // }

  const handleSignup = () => {
   fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(json => console.log(json));
  }
  return (
    <div className="container mt-5">
      <Title color={color}>Stay in the Know</Title>
      <form>
        <div className="input-group mb-3">
          {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
          <input type="email" className="form-control shadow-none" id="exampleInputEmail1" placeholder="Email Address" aria-describedby="emailBtn" />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          {/* <span className="input-group-text">Sign Up</span> */}

          {/* <button type="button" className="btn btn-dark" id="emailBtn" onClick={handleSignup}>Sign Up</button> */}
          <SignupBtn color={color} onClick={handleSignup}>Sign Up</SignupBtn>

        </div>
        {/* <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div> */}
        <div className="row mb-3">
          <div className='col-6'>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
          </div>
           <div className='col-6'>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                <label className="form-check-label" htmlFor="exampleCheck2">Check me out</label>
              </div>
          </div>
        </div>
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        {/* <SubmitBtn color={color}>Submit</SubmitBtn> */}
      </form>
    </div>
  );
}

export default Form;