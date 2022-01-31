import "./Header.css";

function DisplayHeader() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <nav>
        <h1>LOGO</h1>
        <ul>
          <li>
            <button>About</button>
          </li>
          <li>
            <button onClick={sayHello}>How to use</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DisplayHeader;
