import "./style.css";

function RestrictedPage({ isLoggedIn, user, login, logout }) {
  if (isLoggedIn) {
    return (
      <div>
        <h1>Bem-vindo , {user}</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Você não pode acessar a página</h1>
        <button onClick={login}>Login</button>
      </div>
    );
  }
}

export default RestrictedPage;
