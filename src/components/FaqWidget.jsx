import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is BlogAI all about?",
    answer:
      "BlogAI is a platform that leverages the power of AI to generate high-quality blog content.",
  },
  {
    question: "Could you elaborate on the AI Prompt Generator?",
    answer:
      "Certainly! The AI Prompt Generator is a complimentary service designed to aid you in crafting prompts for ChatGPT, which in turn generates engaging blog posts.",
  },
  {
    question: "How can I effectively utilize the AI Prompt Generator?",
    answer:
      "Utilizing the AI Prompt Generator is a breeze. Simply input your desired topic, preferred tone for the blog post, and any additional optional information. Afterward, you can open ChatGPT and paste the generated code.",
  },
  {
    question: "Is there a premium service available?",
    answer:
      "Indeed, we offer a premium service where we can craft SEO-optimized blog posts for your website. This service provides five blog posts for the price of £19.99.",
  },
  {
    question: "What if I require more than just five blog posts?",
    answer:
      "Should you require a greater quantity of blog posts, you have the option to make multiple purchases.",
  },
  {
    question: "How can I make payments for the blog posts?",
    answer:
      "Payments for our blog posts are facilitated through PayPal, providing a secure and reliable payment method.",
  },
  {
    question: "Is customer service provided?",
    answer:
      "Absolutely! We are committed to delivering exceptional customer service. You can easily access our customer service through our dedicated contact page.",
  },
  {
    question: "Can I customize the topics for the generated blog posts?",
    answer:
      "Certainly, you can customize the topics to align with your preferences and niche.",
  },
  {
    question: "How long are the generated blog posts?",
    answer:
      "The length of the generated blog posts can vary based on the input and AI's response. You can specify the desired length in the AI Prompt Generator.",
  },
  {
    question: "Is the AI-generated content edited or reviewed by humans?",
    answer:
      "While the AI generates the initial content, we recommend reviewing and editing it to ensure it meets your specific requirements and style.",
  },
  {
    question: "Can I use the AI-generated content for commercial purposes?",
    answer:
      "Yes, you can use the AI-generated content for both personal and commercial purposes, making it a versatile tool for various applications.",
  },
  {
    question: "Are there any limitations to the AI's capabilities?",
    answer:
      "While the AI is powerful, it's essential to note that its output might require fine-tuning, especially for specialized or complex subjects.",
  },
  {
    question:
      "How frequently can I generate new content using the AI Prompt Generator?",
    answer:
      "You can use the AI Prompt Generator as often as you'd like to create fresh and engaging content for your blog.",
  },
  {
    question:
      "What's the recommended approach for editing the AI-generated content?",
    answer:
      "We suggest treating the AI-generated content as a starting point and tailoring it to your brand's voice and style for a more personalized touch.",
  },
  {
    question:
      "Can I collaborate with others while using the AI Prompt Generator?",
    answer:
      "Absolutely, you can collaborate with team members by sharing the generated prompts and working together to refine the content further.",
  },
  {
    question:
      "Is there a limit to the topics I can generate using the AI Prompt Generator?",
    answer:
      "There is no strict limit on topics. You can generate prompts for a wide range of subjects to cater to your content needs.",
  },
  {
    question: "Are the AI-generated blog posts search engine optimized?",
    answer:
      "While the AI generates the content, the responsibility of optimizing it for SEO lies in how you structure, format, and refine the content before publishing.",
  },
];

export default function Faq() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-32 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
