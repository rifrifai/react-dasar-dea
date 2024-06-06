import "./App.css";

const App = () => {
  const search = (e) => {
    console.info({ e });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MovieTecH</h1>
        <input
          placeholder="search 🔍"
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">Ini Judul</div>
            <img className="Movie-image" src="" />
            <div className="Movie-date">06-06-2024</div>
            <div className="Movie-rate">9.0</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
