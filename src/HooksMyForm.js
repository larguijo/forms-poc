import React from 'react';
import useForm from 'react-hook-form';

function HooksMyForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => { console.log(data) };
  console.log('errors:', errors);
  return (
    [<h1>React Hook Form</h1>,
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" defaultValue="Luis" ref={register} />
      <input name="email" defaultValue="mymail@mymail.com" ref={register({ required: true, minLength: 5 })} />
      {errors.email && <span>This field is Required </span>}
      <input type="submit" />
    </form>]
  );
}

export default HooksMyForm;