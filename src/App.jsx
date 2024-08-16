import logoSwirl from "/logo_swirl.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* <a href="" target="_blank"> */}
        <img src={logoSwirl} className="logo" alt="Company Logo" />
        {/* </a> */}
      </div>
      <h1>Virtualize LLC</h1>
      <div className="card">
        <p>
          Virtualize LLC boosts user experience with automation, simplifying
          frequent tasks on web and mobile. Discover the future of efficiency!
        </p>
      </div>
      <div>
        <p className="warning">Please be patient: Site under construction</p>
      </div>
    </>
  );
}

export default App;
