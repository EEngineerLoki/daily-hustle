import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Books = ({
  image,
  title,
  subTitle,
  author,
  rating,
  contents
}) => {

  let history = useNavigate();

   return (
     <section className="books">
       <div className="books__sidebar">
         <div className="books__sidebar sidebar">sidebar</div>
       </div>
       <div className="books__container container">
         <div className="books__wrapper">
           <div className="books__contents">
             <div className="books__heading">
              <div className="books__heading title">{title}</div>
              <div className="books__heading subtitle">{subTitle}</div>
             </div>
             <div className="books__underTitle">
               <div className="books__underTitle author">{author}</div>
               <div className="books__underTitle rating">{rating}</div>
             </div>
             <div className="books__review">{contents}</div>
           </div>
           <div className="books__image">
             <img src={image} alt="Atomic Habits.png" />
           </div>
         </div>
       </div>
     </section>
   );
};

export default Books;
