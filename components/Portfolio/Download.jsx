import Link from 'next/link';

const Download = () => {
  return (
    <section className={`download section-padding style-5`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="content text-center">
              <div className={`section-head text-center`}>
                <h2 className="mb-20"> Access your business potentials today & find opportunity for {" "}
                  <span>
                    bigger success
                    <img src="/assets/img/header/head5_line.png" alt="" className="head-line"></img>
                    <img src="/assets/img/header/head5_pen.png" alt="" className="head-pen"></img>
                  </span>
                </h2>
              </div>
              <div className="butns mt-70">
                <Link className={`btn rounded-pill fw-bold blue5-3Dbutn hover-blue2 sm-butn mx-1`} target="_blank" href={"/page-about-app"}>
                  <small>See Pricing & Plan</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/contact_globe.svg" alt="" className="contact_globe" />
    </section>
  )
}

export default Download