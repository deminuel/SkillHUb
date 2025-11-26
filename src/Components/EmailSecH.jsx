import React, { useState } from "react";

const EmailSecH = () => {
  const [showEmailConfirmation, setEmailConfirmation] = useState(false);
  const emailConfirmation = (e) => {
    e.preventDefault();
    setEmailConfirmation(!showEmailConfirmation);
  };
  return (
    <section className="py-10 pl-10 lg:w-full bg-[#ecf0f2] pr-5">
      <div className="text-center pt-14">
        <h3 className="font-bold text-4xl pb-5"> Join Our Community</h3>
        <p className="text-lg">
          Enter your email address to register to our newsletter subscription
          delivered on regular basis!
        </p>

        <form
          onSubmit={emailConfirmation}
          className="py-14 flex justify-center gap-3 "
        >
          {showEmailConfirmation ? (
            <p className="text-gray-600 italic text-lg font-light py-5">
              Thank you for subscribing to our newsletter.
            </p>
          ) : (
            <>
              <div className="w-[380px] h-[45px] border-2 rounded-br-2xl indent-2 bg-white">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="outline-none w-full h-full bg-transparent text-base font-medium placeholder-gray-600"
                />
              </div>
              <button className="bg-orange-400 transition-all duration-150 ease-in font-semibold hover:bg-[#007991] text-white px-6 py-2 rounded-tl-2xl">
                SUBSCRIBE
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSecH;
