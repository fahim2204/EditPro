import Link from 'next/link';

const ChatBanner = () => {
  return (
    <section className="chat-banner style-3 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="info">
              <h3>Assess Your Business Potentials Now & Find Opportunities For <span>Bigger Success</span></h3>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bttns text-end">
              <Link href="/page-contact-5">
                <a className="btn rounded-pill bg-white border-1 border-white text-dark sm-butn me-2">
                  <span>Let’s Chat</span>
                </a>
              </Link>
              <Link href="/page-contact-5">
                <a className="btn rounded-pill border-1 border-white text-white sm-butn">
                  <span>Get Information</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatBanner