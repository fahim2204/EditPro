import React from 'react'

const SideMenu = () => {
  const toggleSideMenu = (e) => {
    e.preventDefault();
    const side_menu = document.getElementById('side_menu');
    const side_overlay = document.querySelector('.side_overlay');

    side_menu && side_menu.classList.remove('show');
    side_overlay && side_overlay.classList.remove('show');
  }

  return (
    <>
      <div className="side_menu style-7 dark_theme" id="side_menu">
        <a href="#0" className="side_menu_cls" onClick={toggleSideMenu}>
          <img src="/assets/img/icons/4dots_light.png" alt="" />
        </a>
        <div className="content">
          <div className="logo">
            <a href="#" className="w-100">
              <img src="/assets/img/logo_9.png" alt="" />
            </a>
          </div>
          <div className="pages_links">
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">services</a></li>
              <li><a href="#">portfolio</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">contact</a></li>
              <li><a href="#">shop</a></li>
            </ul>
          </div>
          <div className="side_foot">
            <h5> get in touch </h5>
            <div className="row">
              <div className="col-lg-6">
                <a href="#"> <i className="fal fa-phone-alt me-2"></i> (+23) 5535 68 68 </a>
              </div>
              <div className="col-lg-6">
                <a href="#"> <i className="fal fa-envelope me-2 mt-4 mt-lg-0"></i> contact@Iteck.co </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side_overlay" onClick={toggleSideMenu}></div>
    </>
  )
}

export default SideMenu