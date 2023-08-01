import React from 'react'
import { Link } from 'react-router-dom'

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendIcon from '@mui/icons-material/Send';

const Contact = ({
  headingTitle,
  twitterLink,
  facebookLink,
  instagramLink,
  telegramLink,
  title,
  paragraphOne,
  paragraphTwo,
  buttonOne,
  buttonTwo
}) => {
  return (
    <section className="contact">
      <div className="contact__container container">
        <div className="contact__wrapper">
          <div className="contact__content">
            <div className="contact__site">
              <div className="contact__title heading">{headingTitle}</div>
              <div className="contact__link">
                <TwitterIcon/>
                <a href={twitterLink} className="contact__links">{twitterLink}</a>
              </div>
              <div className="contact__link">
                <FacebookIcon/>
                <a href={facebookLink} className="contact__links">{facebookLink}</a>
              </div>
              <div className="contact__link">
                <InstagramIcon/>
                <a href={instagramLink} className="contact__links">{instagramLink}</a>
              </div>
              <div className="contact__link">
                <TelegramIcon/>
                <a href={telegramLink} className="contact__links">{telegramLink}</a>
              </div>
              <div className="contact__siteParagraph">{paragraphTwo}</div>
              <div className="contact__cta__wrapper">
                <div className="contact__cta__button btn btn--white btn--intro">
                  <a href="https://www.facebook.com/matthew.loquinerio/">{buttonOne}</a>
                </div>
              </div>
            </div>
            <div className="contact__form">
              <div className="contact__formTitle">{title}</div>
              <div className="contact__formParagraph">{paragraphOne}</div>

              <form name='contact-form' className='contact--form'>
                <div className="contact__form__control">
                  <label>Full Name</label>
                  <input name='name' placeholder='First and Last Name'/>
                  {/* <div class="error hide">Name is required</div> */}
                </div>

                <div className="contact__form__control">
                  <label>Email</label>
                  <input name='email' placeholder='e.g. your_email@example.com'/>
                  {/* <div class="error hide">Name is required</div> */}
                </div>

                <div className="contact__form__control">
                  <label>Phone</label>
                  <input name='phone'/>
                  {/* <div class="error hide">Name is required</div> */}
                </div>

                <div className="contact__form__control">
                  <label>Message</label>
                  <input name='message'/>
                  {/* <div class="error hide">Name is required</div> */}
                </div>
                <div className="contact__cta__wrapper">
                  <button className="shop__cta__button btn btn--white btn--intro" type='submit'>
                    {buttonTwo}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact