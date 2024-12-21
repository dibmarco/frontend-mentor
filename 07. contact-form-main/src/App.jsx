function App() {
  return (
    <div className="p-2">
      <h1 className="text-xl font-bold">Contact Us</h1>
      <form className="flex flex-col">
        <label htmlFor="fname">
          First name <span>&#42;</span>
        </label>
        <input
          className="border-2 border-slate-300 pl-1"
          type="text"
          id="fname"
          name="fname"
          aria-label="First name"
        />

        <label htmlFor="lname">
          Last name <span>&#42;</span>
        </label>
        <input
          className="border-2 border-slate-300 pl-1"
          type="text"
          id="lname"
          name="lname"
          aria-label="Last name"
        />

        <label htmlFor="email">
          Email <span>&#42;</span>
        </label>
        <input
          className="border-2 border-slate-300 pl-1"
          type="email"
          id="email"
          name="email"
          aria-label="Email"
        />

        <p>
          Query type <span>&#42;</span>
        </p>

        <div className="flex gap-3">
          <div className="flex gap-2 border-2 px-3 py-1">
            <input
              className="custom-radio"
              type="radio"
              id="general"
              name="query_type"
              aria-label="General Enquiry"
            />
            <label htmlFor="general">General Enquiry</label>
          </div>

          <div className="flex gap-2 border-2 px-3 py-1">
            <input
              className="custom-radio"
              type="radio"
              id="support"
              name="query_type"
              aria-label="Support Request"
            />
            <label htmlFor="support">Support Request</label>
          </div>
        </div>

        <label htmlFor="message">
          Message <span>&#42;</span>
        </label>
        <textarea
          className="border-2 border-slate-300 p-1  "
          name="message"
          id="message"
          cols="45"
          rows="8"
          aria-label="Message"
        ></textarea>
      </form>
    </div>
  );
}

export default App;
