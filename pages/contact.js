import React, { useState } from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
      window.location.href = "https://warzone.now.sh/";
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <Layout>
      <Head>
        <title>Contact us</title>
      </Head>
      <Container>
        <Intro />
        <div className="mb-8 md:mb-16">
          <img
            src="about.jpg"
            alt="Cover Image for contact page"
            className="shadow-small border-gray-400 rounded-md"
          />
        </div>
        <main>
          <form className="w-full md:w-2/3 pb-8" onSubmit={handleOnSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-white appearance-none border-2 border-gray-200  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                  id="fullname"
                  type="text"
                  placeholder="John W. Killer"
                  value={inputs.fullname}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-white appearance-none border-2 border-gray-200  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                  id="email"
                  type="email"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                  placeholder="john.killer@gmail.com"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Message
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  className="block tracking-wide  h-32 bg-white appearance-none border-2 border-gray-200 resize-none  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                  id="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                  placeholder="Your Message"
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                  type="submit"
                  disabled={status.submitting}
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </button>
              </div>
            </div>
          </form>
        </main>
        {status.info.error && (
          <div role="alert">
            <div class="bg-red-500 text-white font-bold px-4 py-4">Error</div>
            <div class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
              <p>
                Something weird happened. Would you write at{" "}
                <a href="mailto:vorcigernix@gmail.com"></a> ?
              </p>
              <p>{status.info.error}</p>
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
}
