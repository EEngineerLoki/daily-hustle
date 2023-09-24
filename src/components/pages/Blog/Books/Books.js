import React from 'react';
import { useNavigate } from 'react-router-dom';

import { booksData } from '../../../../data/booksdata'

import Sidebar from '../../../Sidebar/Sidebar';

const Books = () => {

  let history = useNavigate();

   return (
     <React.Fragment>
        {booksData.map((books, index) => {
          return (
            <section className="books" key={index}>
              <div className="books__sidebar">
                <div className="books__sidebar sidebar"><Sidebar/></div>
              </div>
              <div className="books__container container">
                <div className="books__wrapper">
                  <div className="books__contents" id={books.id}>
                    <div className="books__heading">
                      <div className="books__heading title">{books.title}</div>
                      <div className="books__heading subtitle">{books.subTitle}</div>
                    </div>
                    <div className="books__underTitle">
                      <div className="books__underTitle author">{books.author}</div>
                      <div className="books__underTitle rating">{books.rating}</div>
                    </div>
                    <div className="books__review">{books.contents}</div>
                  </div>
                  <div className="books__image">
                    <img src={books.image} alt="Atomic Habits.png" />
                  </div>
                </div>
              </div>
            </section>
          )
        })}
     </React.Fragment>
   );
};

export default Books;
