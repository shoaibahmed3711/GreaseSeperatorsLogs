import React, { useState, useEffect } from "react";

const Feedback = () => {
  const [inputText, setInputText] = useState("");
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
  });
  const [ratings, setRatings] = useState(() => {
    const savedRatings = localStorage.getItem("ratings");
    return savedRatings ? JSON.parse(savedRatings) : [];
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleRatingChange = (index, rating) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = rating;
    setRatings(updatedRatings);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== "") {
      setFeedbacks([...feedbacks, inputText]);
      setRatings([...ratings, 0]); // Default rating is 0
      setInputText("");
    }
  };

  return (
    <div className="p-[2vw] bg-white shadow-lg text-black w-[90vw] rounded-md ml-[4vw]  h-screen flex flex-col ">
      <h1 className="font-bold text-[2vw] ml-[3vw]">Feedback</h1>
      <div className="p-[2vw] flex flex-row gap-[1vw]">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your feedback"
          className="w-[50vw] text-[1vw] p-[1vw] bg-transparent shadow-2xl border-b-[0.1vw] border-l-[0.1vw] border-black"
        />
        <button onClick={handleSubmit}>
          <img src="src/pages/Feedback/star/send.png" className="w-[3vw]" alt="" />
        </button>
      </div>
      <div className="overflow-y-auto">
        {feedbacks.map((feedback, index) => (
          <div className="feedback p-[1vw] ml-[1vw]" key={index}>
            <div className="flex flex-row items-center gap-[1vw]">
              <img
                src="src/pages/Dashboard/images/profile.png"
                className="w-[3vw]"
                alt=""
              />
              <h1 className="text-gray-600 text-[1vw]">XXXXXXX@gmail.com</h1>
              {/* Render stars for rating */}
              <div className="flex gap-[0.5vw]">
                {[...Array(5)].map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={starIndex < ratings[index] ? "src/pages/Feedback/star/Fstar.png" : "src/pages/Feedback/star/Estar.png"}
                    className="w-[2vw] cursor-pointer"
                    alt=""
                    onClick={() => handleRatingChange(index, starIndex + 1)}
                  />
                ))}
              </div>
              {/* Display rating number */}
              <span className="text-[1vw]">{ratings[index]}.0</span>
            </div>
            <div>
              <p className="p-[1vw] text-[1vw] border-b-[0.1vw] border-l-[0.1vw] border-gray-300">{feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
