import React, { useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_GOOGLESHEETS_LINK}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify([
            [
              formdata.name,
              formdata.email,
              formdata.message,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
      setFormdata((prevData) => {
        return { ...prevData, name: "", email: "", message: "" };
      });
      alert("Thankyou for contacting");
    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="md:w-[80%] px-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="md:px-12">
            <div>
              <h1 className="text-white font-kanit text-2xl">Contact Me</h1>
              <p className="text-white font-kanit text-lg leading-10">
                If you consider me a good candidate for an open position, or if
                you'd like to discuss a freelance project, else if you just want
                to say hello, contact me on social media, or send me a message!
                else, Looking to get in touch with me? I'm all ears! You can
                drop me a line at kasturirangan20@gmail.com and I'll get back to
                you quicker than you can say "abracadabra." Let's connect and
                make some magic happen!
              </p>
            </div>
            <div className="flex justify-center gap-5">
              <a
                href="https://www.linkedin.com/in/-kasturirangan/"
                target="_blank"
                rel="noreferrer noopener"
                className=" drop-shadow-custom"
              >
                <img src="https://img.icons8.com/?size=60&id=447&format=png" />
              </a>
              <a
                href="https://github.com/Kr-dev1"
                target="_blank"
                rel="noreferrer noopener"
                className="drop-shadow-custom"
              >
                <img src="https://img.icons8.com/?size=60&id=zuHqpgzrusU5&format=png" />
              </a>
            </div>
          </div>
          <div>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col gap-5 font-kanit"
            >
              <input
                type="text"
                placeholder="name"
                name="name"
                value={formdata.name}
                className="px-4 py-2 rounded-xl"
                onChange={(e) => handleChange(e)}
                required
              ></input>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={formdata.email}
                className="px-4 py-2 rounded-xl"
                onChange={(e) => handleChange(e)}
                required
              ></input>
              <textarea
                type="text"
                name="message"
                placeholder="message"
                value={formdata.message}
                className="px-4 py-1 rounded-xl "
                rows="5"
                onChange={(e) => handleChange(e)}
                required
              ></textarea>
              <button className="bg-gray-700 rounded-2xl py-2 drop-shadow-nav">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
