import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Guess this design's price</h1>
      <div className="image-wrapper">
        <img
          className="image"
          src="https://uploads.ifdesign.de/award_img_351/oex_large/351713_02_main_entry_img.jpg"
          alt="designer product"
        ></img>
      </div>
      <label for="guess">$</label>
      <input id="guess" type="text" placeholder="Enter your guess"></input>
      {/* <h2>You are the {}th guesser today!</h2> */}
    </div>
  );
}

export default App;
