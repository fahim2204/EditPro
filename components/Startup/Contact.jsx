import { useState } from 'react';
import axios from 'axios';

const Contact = ({ rtl }) => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    option: "",
    message: ""
  });

  const handleFormChange = (e) => {
    setFormdata(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formValues = new FormData();

    formValues.append('name', formData.name);
    formValues.append('email', formData.email);
    formValues.append('phone', formData.phone);
    formValues.append('website', formData.website);
    formValues.append('option', formData.option);
    formValues.append('message', formData.message);
    
    const res = await axios.post('/contact.php', formValues)
      .catch(err => alert(err.message));

    if (!res) return;

    alert('Form submitted successfully.')
  }


  return (
    <section className="contact section-padding style-6" data-scroll-index="9">
      <div className="container">
        <div className="section-head mb-60 style-6 text-center">
          {
            rtl ? 
            <h2 className="mb-20"> احصل على <span><small>استشارة مجانية</small></span></h2>
            :
            <h2 className="mb-20"> Get free <span> <small> consultation </small> </span></h2>
          }
          {
            rtl ?
            <p className="color-666">سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة</p>
            :
            <p className="color-666">We will contact again after receive your request in 24h</p>
          }
        </div>
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form action="contact.php" className="form" method="post" onSubmit={handleFormSubmit}>
                <p className="text-center text-danger fs-12px mb-30">{ rtl ? "الحقل اللذى يحتوى على هذة العلامة اجبارى *" : "The field is required mark as *" }</p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="name" className="form-control" placeholder={rtl ? "الأسم" : "Name"} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="email" className="form-control" placeholder={rtl ? "البريد الألكترونى *" : "Email Address *"} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="phone" className="form-control" placeholder={rtl ? "الهاتف (اختياري)" : "Phone Number (option)"} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="website" className="form-control" placeholder={rtl ? "موقعك الالكترونى (اختياري)" : "Your Website (option)"} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-20">
                      <select className="form-select" defaultValue={rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"} name="option" onChange={handleFormChange}>
                        <option value={rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"}>{rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"}</option>
                        <option value={rtl ? "الاختيار الاول" : "option 1"}>{rtl ? "الاختيار الاول" : "option 1"}</option>
                        <option value={rtl ? "الاختيار الثانى" : "option 2"}>{rtl ? "الاختيار الثانى" : "option 2"}</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea name="message" rows="10" className="form-control" placeholder={rtl ? "كيف يمكننا مساعدتك?" : "How can we help you?"} onChange={handleFormChange}></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <div className="form-check d-inline-flex mt-30 mb-30">
                      <input className="form-check-input me-2 mt-0" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label small" htmlFor="flexCheckDefault">
                        {rtl ? "من خلال الإرسال ، أوافق على" : "By submitting, i’m agreed to the"} <a href="#" className="text-decoration-underline">{rtl ? "الشروط و الاحكام" : "Terms & Conditons"}</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <input type="submit" value={rtl ? "أرسل طلبك" : "Send Your Request"} className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <img src="/assets/img/icons/contact_a.png" alt="" className="contact_a" />
          <img src="/assets/img/icons/contact_message.png" alt="" className="contact_message" />
        </div>
      </div>
    </section>
  )
}

export default Contact