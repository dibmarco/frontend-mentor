function App() {
  return (
    <form className="flex flex-col p-2">
      <label htmlFor="fname">
        First name <span>&#42;</span>
      </label>
      <input
        className="border-2 border-blue-500"
        type="text"
        id="fname"
        name="fname"
        aria-label="First name"
      />

      <label htmlFor="lname">
        Last name <span>&#42;</span>
      </label>
      <input
        className="border-2 border-blue-500"
        type="text"
        id="lname"
        name="lname"
        aria-label="Last name"
      />

      <label htmlFor="email">
        Email <span>&#42;</span>
      </label>
      <input
        className="border-2 border-blue-500"
        type="email"
        id="email"
        name="email"
        aria-label="Email"
      />

      <p>
        Query type <span>&#42;</span>
      </p>

      <div className="flex gap-2">
        <input
          type="radio"
          id="general"
          name="query_type"
          aria-label="General Enquiry"
        />
        <label htmlFor="general">General Enquiry</label>

        <input
          type="radio"
          id="support"
          name="query_type"
          aria-label="Support Request"
        />
        <label htmlFor="support">Support Request</label>
      </div>

      <label htmlFor="message">
        Message <span>&#42;</span>
      </label>
      <textarea
        className="border-2 border-blue-500"
        name="message"
        id="message"
        cols="45"
        rows="8"
        aria-label="Message"
      ></textarea>
    </form>
  );
}

export default App;
