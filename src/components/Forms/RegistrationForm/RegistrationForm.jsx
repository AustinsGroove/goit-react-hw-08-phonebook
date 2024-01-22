import Wrapper from './RegistrationForm.styled';

const RegistrationForm = ({ register }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { firstName, email, password } = e.target.elements;
    register({
      name: firstName.value,
      email: email.value,
      password: password.value,
    });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputName">Name:</label>
          <input type="text" name="firstName" id="inputName" />
        </div>
        <div>
          <label htmlFor="inputEmail">Email address:</label>
          <input
            type="email"
            name="email"
            id="inputEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="inputPassword">Password:</label>
          <input name="password" type="password" id="inputPassword" />
        </div>
        <button type="submit">Registration</button>
      </form>
    </Wrapper>
  );
};

export default RegistrationForm;
