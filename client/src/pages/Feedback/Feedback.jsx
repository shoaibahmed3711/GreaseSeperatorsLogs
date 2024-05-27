import React, { useState, useEffect } from "react";

const Feedback = () => {
  const [inputText, setInputText] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputImage, setInputImage] = useState("");
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

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setInputImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRatingChange = (index, rating) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = rating;
    setRatings(updatedRatings);
  };

  const handleSubmit = () => {
    if (inputText.trim() !== "" && inputName.trim() !== "" && inputImage !== "") {
      setFeedbacks([...feedbacks, { text: inputText, name: inputName, image: inputImage }]);
      setRatings([...ratings, 0]); // Default rating is 0
      setInputText("");
      setInputName("");
      setInputImage("");
    }
  };

  const handleDelete = (index) => {
    setFeedbacks((prevFeedbacks) => {
      const updatedFeedbacks = [...prevFeedbacks];
      updatedFeedbacks.splice(index, 1);
      return updatedFeedbacks;
    });
    setRatings((prevRatings) => {
      const updatedRatings = [...prevRatings];
      updatedRatings.splice(index, 1);
      return updatedRatings;
    });
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="w-[60vw] bg-white shadow-lg text-black rounded-md ml-[4vw] h-screen flex flex-col">
        <h1 className="font-black text-[3vw] ml-[3vw]">Feedback</h1>
        <h1 className="font-bold text-[2vw] ml-[3vw]">Do you have any Questions,<br /> <i>Suggestions</i> or <i>feedback?</i><br /> We'd love to hear from you</h1>
        <div className="overflow-y-auto flex-grow">
          {feedbacks.map((feedback, index) => (
            <div className="feedback p-[1vw] ml-[1vw]" key={index}>
              <div className="flex flex-row items-center gap-[1vw]">
                <img
                  src={feedback.image}
                  className="w-[3vw] rounded-full"
                  alt=""
                />
                <h1 className="text-gray-600 text-[1vw]">{feedback.name}</h1>
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
                <span className="text-[1vw]">{ratings[index]}.0</span>
                {inputName === feedback.name && (
                  <button onClick={() => handleDelete(index)}>Delete</button>
                )}
              </div>
              <div>
                <p className="p-[1vw] text-[1vw] border-b-[0.1vw] border-l-[0.1vw] border-gray-300">{feedback.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-[2vw] flex flex-col gap-[1vw] h-screen w-[30vw]">
        <input
          type="text"
          value={inputName}
          onChange={handleNameChange}
          placeholder="Enter your name"
          className="w-full rounded-[0.5vw] text-[1vw] p-[1vw] bg-transparent shadow-2xl border-[0.1vw] border-black"
        />
         <div className="file-upload border-[0.1vw] border-black rounded-[0.5vw]">
              <input
                type="file"
                onChange={handleImageChange}
                className="hidden"
                id="file-upload"
              />
              <label
                  htmlFor="file-upload"
                  className="upload-label flex flex-row items-center  rounded-lg cursor-pointer"
                  >
                  <img src="/Feedback/attach.png" className='w-[4vw]  rounded-full p-[0.3vw]' alt="" />
                  <h1 className="text-[1.4vw] text-[#444444]">Attach your Image</h1>
              </label>
          </div>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your feedback"
          className="w-full rounded-[0.5vw] h-[20vw] text-[1vw] p-[1vw] bg-transparent shadow-2xl border-[0.1vw] border-black"
        />
        <button onClick={handleSubmit} className="w-full p-[0.3vw] bg-[#444444] hover:bg-black text-white text-[1.4vw] rounded-[0.3vw]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;
