export const Contact = () => {
  function HandelForm(e) {
    e.preventDefault();
    const FormDataObj = new FormData(e.target);
    const chec=Object.fromEntries(FormDataObj.entries())
    console.log(chec);
}
  return (
    <>
      <div className="section-contact">
        <div className="container">
          <div className="contact-grid">
            <div className="head-contact">
              <h1>Contact</h1>
            </div>
            <div className="form">
              <form onSubmit={HandelForm}>
                <input type="text" name="username" placeholder="enter your name" />
                <input type="email" name="useremail" placeholder="enter your email" />
                <textarea name="message" cols={40} rows={10} placeholder="enter the message"></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


