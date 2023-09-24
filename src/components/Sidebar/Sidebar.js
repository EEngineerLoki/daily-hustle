import React, { useState, useRef } from 'react'

import { sidebarData } from '../../data/sidebarData';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(false);

    const history = useNavigate();
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

  return (
      <React.Fragment>
          {sidebarData.map((sidebar, index) => {
              return (
                  <div className="nav" key={index}>
                      <div className="nav__wrapper">
                          <div className="nav__title">{sidebar.title}</div>
                          <div className="nav__links">
                              <ArrowRightIcon/>
                              <div onClick={handleClick}>
                                  {sidebar.link}
                                </div>
                              {/* <a href={sidebar.id}>{sidebar.link}</a> */}
                          </div>
                      </div>
                  </div>
              )
          })}
      </React.Fragment>
  )
}

export default Sidebar