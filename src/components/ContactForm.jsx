
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
function ContactForm() {
  const [state, handleSubmit] = useForm("xleybwvl");
  if (state.succeeded) {
    return (
      <>
        <p className="text-gray-200  prose-lg md:prose-2xl mt-10 text-center">
          Thanks for leaving an awesome comment!
        </p>
        <div className=" text-center prose-base text-gray-300">
          <a className="text-purple-500 underline" href="/">
            Homepage
          </a>
        </div>
      </>
    );
  }
  return (
    <div className="p-8 max-w-[800px] m-auto flex flex-col gap-4 justify-center text-white">
      <h1 class="text-2xl text-gray-200 font-bold mb-4">
        Your Blog's Next Chapter Starts Here
      </h1>

      <p class="mb-4">
        Have inquiries or considering collaboration? Share your details in the
        form below, and we'll connect.
      </p>

      <h2 class="mb-6 text-xl">
        Elevate Your Blog with 5 Pro Posts – Just £19.99
      </h2>
      <ul class="list-disc ml-6 mb-6">
        <li class="mb-1">
          Quality content: Clear instructions, easy form, and £19.99 PayPal
          invoice.
        </li>
        <li>Fast delivery: 5 expert blog posts in 3-7 days after payment.</li>
      </ul>

      <p class="mb-4">
        Explore this opportunity to enhance your blog's impact. Let's make your
        blog stand out together.
      </p>

      <form onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>

        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
            required
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Add your comment
          </label>
          <div className="mt-2">
            <textarea
              rows={4}
              name="message"
              id="message"
              className="block bg-gray-800 w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Add your comment here"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              required={true}
            />
          </div>
        </div>

        <div className="flex justify-end text-center mt-6">
          <button
            type="submit"
            disabled={state.submitting}
            className="flex justify-center gap-x-1  mt-2 w-full md:w-[120px] rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            <ChevronDoubleRightIcon
              className="-ml-0.5 h-5 w-5"
              aria-hidden="true"
            />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
