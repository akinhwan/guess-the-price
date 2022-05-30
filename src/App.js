import './App.css';
import { supabase } from './supabaseClient';
import { useEffect } from 'react';
import Modal from './Modal';

function App() {
  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     if (session === null) {
  //       history.replace("/login");
  //     } else {
  //       history.replace("/");
  //     }
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const detectChangeTab = () => {
    document.addEventListener('visibilitychange', (event) => {
      if (document.visibilityState === 'visible') {
        console.log('tab is active');
      } else {
        console.log('tab is inactive');
      }
    });
  };

  const submitData = async () => {
    const timestamp = new Date();
    const { data, error } = await supabase
      .from('guesses')
      .insert([
        { guess: 556, created_at: timestamp, email: 'akinhwan@gmail.com' },
      ]);

    console.log(data, error);
  };

  return (
    <div className="App">
      <Modal />
      <h1>Guess this design's price</h1>
      <div className="image-wrapper">
        <img
          className="image"
          src="https://uploads.ifdesign.de/award_img_351/oex_large/351713_02_main_entry_img.jpg"
          alt="designer product"
        ></img>
      </div>
      <form>
        <div className="price-wrapper">
          <label for="guess">$</label>
          <input id="guess" type="text" placeholder="Enter your guess"></input>
        </div>

        <div className="email-wrapper">
          <label for="guess">
            An address we can notify when the price is right
          </label>
          <input id="email" type="text" placeholder="Your Email"></input>
        </div>

        <div className="button-wrapper">
          <button onClick={submitData}>Submit</button>
        </div>
      </form>

      {/* <h2>You are the {}th guesser today!</h2> */}
    </div>
  );
}

export default App;
