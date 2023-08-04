import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Books = () => {

  let history = useNavigate();

   return (
     <section className="books">
       <div className="books__container container">
         <div className="books__wrapper">
           Matthew
         </div>
       </div>
     </section>
   );
};

export default Books;
