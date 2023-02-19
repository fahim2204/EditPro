import React from 'react'

const ChatBanner = () => {
  return (
    <section className="chat-banner style-9">
      <div className="container">
        <div className="content text-center wow zoomIn">
          <div className="section-head text-center style-9">
            <h6 className="text-white"> sync by app </h6>
            <h2 className="text-white"> Your Favorite Hosting App Is <br /> One Click Away </h2>
            <div className="btns mt-40">
              <a href="#" className="butn bg-darkBlue2 border-darkBlue2 border-2 border  text-white rounded-3">
                <span> Get In Touch </span>
              </a>
              <a href="#" className="butn text-white border-2 border-white border rounded-3 ms-3">
                <span> Learn More </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/chat_back9_icons.png" alt="" className="img_back slide_up_down" />
    </section>
  )
}

export default ChatBanner