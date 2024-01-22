import Wrapper from './LoginForm.styled';

const LoginForm = ({ login }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login({ email: email.value, password: password.value });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
