import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import { useMutation, useApolloClient, gql } from '@apollo/client';

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

// include the props passed to the component for later use
const SignUp = props => {
  // set the default state of the form
  //   useState, onChange, and useEffect all remain the same here
  const [values, setValues] = useState();

  // update the state when a user types in the form
  const onChange = event => {
    // console.log(values,event.target);
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    // update the document title
    document.title = 'Sign Up — Notedly';
  });

  /** doc link: https://www.apollographql.com/docs/react/data/mutations/
   *   When your component renders, useMutation returns a tuple that includes:
   *   - A mutate function
   *   - An object with fields that represent the current status of the mutation's execution
   */
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      //  add mutation hook
      console.log(data, data.signUp);
    }
  });

  // render our form
  return (
    <Wrapper>
      <h2>Sign Up</h2>
      {/* pass the form data to the mutation when a user submits the form */}
      <Form
        onSubmit={event => {
          event.preventDefault();
          signUp({
            variables: {
              ...values
            }
          });
        }}
      >
        {/* ... the rest of the form remains unchanged ... */}
        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          onChange={onChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
