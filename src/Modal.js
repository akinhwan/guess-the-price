import './Modal.css';
import { supabase } from './supabaseClient';
import { useEffect } from 'react';

function Modal() {
  return (
    <div className="Modal">
      <div className="background"></div>
      <div className="modal-wrapper">
        <ol>
          <li>
            One new product design to guess the price of will appear here per
            day.
          </li>
          <li>Each user is limited to one guess per day.</li>
          <li>
            At the end of the day, all guesses will be tabulated and the winner
            will be notified.
          </li>
          <li>Don't search for any help!</li>
          <li>
            Worth repeating - don't cheat, it defeats the whole point of the
            game.
          </li>
          <li>The closest guesser of the day will be awarded.</li>
          <li>
            At the end of the week, there will be a live screen-share game show.
          </li>
          <li>
            The winner of that live show will win a real designer product.
          </li>
        </ol>
        {/* <p>
        Guess the price of the pictured designer product (pre-tax, MSRP). One
        lucky winner with the exact correct price, will win the product!
        </p>
        <p>
        Don’t
        look up the price. Don’t use another device to look up the price. Honor
        system. Winners will be invited to a live screen-shared zoom session to
        win even bigger prizes!
      </p> */}
      </div>
    </div>
  );
}

export default Modal;
