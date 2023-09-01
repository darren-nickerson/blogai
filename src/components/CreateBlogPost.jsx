import { ChevronDoubleRightIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useState, useRef, useEffect } from "react";

const tones = [
  "Academic",
  "Accessible",
  "Affectionate",
  "Aggressive",
  "Amusing",
  "Analytical",
  "Animated",
  "Apologetic",
  "Apprehensive",
  "Argumentative",
  "Authoritative",
  "Bittersweet",
  "Boastful",
  "Bold",
  "Calm",
  "Captivating",
  "Celebratory",
  "Challenging",
  "Charismatic",
  "Cheerful",
  "Clinical",
  "Colloquial",
  "Compassionate",
  "Compelling",
  "Concise",
  "Confident",
  "Contemplative",
  "Convincing",
  "Critical",
  "Curious",
  "Cynical",
  "Defiant",
  "Deliberate",
  "Delightful",
  "Detached",
  "Diplomatic",
  "Direct",
  "Dispassionate",
  "Dramatic",
  "Dry",
  "Dynamic",
  "Earnest",
  "Eccentric",
  "Educational",
  "Eloquent",
  "Empathetic",
  "Encouraging",
  "Energetic",
  "Engaging",
  "Enthusiastic",
  "Entertaining",
  "Exaggerated",
  "Experiential",
  "Explorative",
  "Exuberant",
  "Factual",
  "Fanciful",
  "Formal",
  "Friendly",
  "Frustrated",
  "Fun-loving",
  "Gentle",
  "Happy-go-lucky",
  "Heartfelt",
  "Honest",
  "Hopeful",
  "Humble",
  "Humorous",
  "Impartial",
  "Impassioned",
  "Informal",
  "Informative",
  "Inquisitive",
  "Inspiring",
  "Intellectual",
  "Intense",
  "Intimate",
  "Intriguing",
  "Irreverent",
  "Jocular",
  "Joyful",
  "Lighthearted",
  "Logical",
  "Melancholic",
  "Meticulous",
  "Motivational",
  "Nostalgic",
  "Objective",
  "Observational",
  "Optimistic",
  "Outspoken",
  "Passionate",
  "Playful",
  "Poignant",
  "Practical",
  "Precise",
  "Profound",
  "Quirky",
  "Rational",
  "Reflective",
  "Resolute",
  "Reverent",
  "Rhetorical",
  "Sardonic",
  "Sensitive",
  "Serious",
  "Sharp",
  "Silly",
  "Sincere",
  "Skeptical",
  "Soothing",
  "Speculative",
  "Spirited",
  "Spontaneous",
  "Stirring",
  "Storytelling",
  "Straightforward",
  "Subdued",
  "Sympathetic",
  "Thought-provoking",
  "Tolerant",
  "Unbiased",
  "Unconventional",
  "Uplifting",
  "Urgent",
  "Vibrant",
  "Visionary",
  "Witty",
  "Wry",
  "Zealous",
];

function CreateBlogPost() {
  // State variables to store user inputs and generated prompt
  const [topic, setTopic] = useState("");
  const [selectedTone, setSelectedTone] = useState("");
  const [comment, setComment] = useState("");
  const [prompt, setPrompt] = useState("");
  const [notSelected, setNotSelected] = useState("");
  const textareaRef = useRef(null); // Reference for the textarea element

  // Function to generate the prompt based on user inputs

  useEffect(() => {
    if (topic && selectedTone) {
      setNotSelected("");
    }
  }, [topic, selectedTone]);

  const generatePrompt = () => {
    if (!topic || !selectedTone) {
      setNotSelected("You must select a Topic & Tone."); // Ensure both topic and tone are selected
      return;
    } else {
      setNotSelected("");
      setPrompt(
        `Please create a blog post with a word count ranging from 1500 to 2500 words, focusing on the topic of ${topic} while maintaining a ${selectedTone.toLowerCase()} tone. It is important that the blog post is easy for readers to understand. Apply markdown for content formatting and include suitable headings for titles. Include a table of contents that provides links to different sections within the blog post. Also, wrap the table of contents in a details tag and summary tag with the title of the table of contents. Start the blog post with the title "Introduction," placed just below the table of contents. Conclude the blog post with a section titled "Conclusion." Additionally, I would appreciate it if you could generate a title, meta description, SEO slug, and SEO keywords for the blog post and to  optimize blog post for search engines. Please include the SEO-related details at the start of the blog post. ${comment}`
      );
    }
  };
  // Function to copy generated prompt to clipboard
  const copyToClipboard = () => {
    if (textareaRef.current) {
      textareaRef.current.select(); // Select the text inside the textarea
      document.execCommand("copy"); // Execute the copy command
    }
  };

  // Event handlers for input changes
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleToneChange = (e) => {
    setSelectedTone(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="p-8 max-w-[800px] m-auto flex flex-col gap-6 justify-center text-white">
      <h1 className="prose-2xl text-gray-100 font-bold">Ai Post Generator</h1>

      <p className="text-red-500">{notSelected}</p>
      {/* Input section */}
      {!prompt && (
        <div className="flex flex-col gap-6">
          <div>
            {/* Topic input */}
            <label
              htmlFor="topic"
              className="block text-sm font-medium leading-6 text-white"
            >
              *Topic
            </label>
            {/* Input field for topic */}
            <div className="mt-2">
              <input
                type="text"
                name="topic"
                id="topic"
                className="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                placeholder="e.g. How to write a blog post"
                aria-describedby="topic-description"
                value={topic}
                onChange={handleTopicChange}
              />
            </div>
          </div>

          {/* Tone selection */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-white"
            >
              *Tone
            </label>
            {/* Dropdown for selecting tone */}
            <select
              id="tone"
              name="tone"
              className="bg-gray-800 mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-200 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6"
              defaultValue={selectedTone}
              onChange={handleToneChange}
            >
              <option value="">Select a tone</option>
              {/* Mapping through tones to create options */}
              {tones.map((tone) => (
                <option key={tone}>{tone}</option>
              ))}
            </select>
          </div>

          {/* Comment input */}
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium leading-6 text-white"
            >
              (Optional) Fine tune the prompt
            </label>
            <div className="mt-2">
              {/* Textarea for comment */}
              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                value={comment}
                onChange={handleCommentChange}
                placeholder="You may choose to fine-tune the prompt if you wish, and you also have the flexibility to incorporate more information if desired."
              />
            </div>
          </div>
        </div>
      )}

      {/* Button to generate prompt */}
      {!prompt && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={generatePrompt}
            className="inline-flex justify-center w-full items-center gap-x-1  mt-2 md:w-[200px] rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-greem-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            <ChevronDoubleRightIcon
              className="-ml-0.5 h-5 w-5"
              aria-hidden="true"
            />
            Generate Prompt
          </button>
        </div>
      )}

      {/* Display and action section after prompt is generated */}
      {topic && selectedTone && prompt && (
        <div className="flex justify-end">
          {/* Button to start over */}
          <a href="/blog-prompt-generator">
            <XCircleIcon className="h-8 w-8 text-gray-500 hover:text-gray-300" />
          </a>
        </div>
      )}

      {/* Display generated prompt */}
      <div>
        {topic && selectedTone && prompt && (
          <div className="mt-2">
            {/* Textarea to display and copy generated prompt */}
            <textarea
              rows={6}
              name="prompt"
              id="prompt"
              className="texthighlight bg-[#374151] block w-full rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 m resize-none min-h-[200px]"
              defaultValue={prompt}
              ref={textareaRef}
            />

            {/* Link to ChatGPT */}
            <label
              htmlFor="comment"
              className="text-sm font-medium leading-6 text-white flex justify-end pt-2"
            >
              Open:{" "}
              <a
                className="text-[#45A67C] pl-1 underline"
                href="https://chat.openai.com/"
              >
                {" "}
                ChatGPT
              </a>
            </label>
          </div>
        )}
      </div>

      {/* Button to copy generated prompt to clipboard */}
      {topic && selectedTone && prompt && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={copyToClipboard}
            className="inline-flex items-center bg-purple-700  gap-x-2 w-[200px] rounded-md bg-pruple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            <ChevronDoubleRightIcon
              className="-ml-0.5 h-5 w-5"
              aria-hidden="true"
            />
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateBlogPost;
