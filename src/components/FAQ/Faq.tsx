"use client";
import React, { useState } from "react";

const Faq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className="bg-ghostwhite py-20 px-[106px]">
      <div className="flex items-center gap-2 justify-center border border-primary-2 w-[81px] h-[22px] rounded-[100px] text-primary font-merriweather font-normal text-sm">
        <span className="w-[6px] h-[6px] rounded-full bg-primary-2"></span>
        FAQ
      </div>

      <div className="flex justify-between mt-2">
        <h2 className="font-manrope font-bold text-4xl text-black-50 flex-1">
          Everything You Wanted to Ask <br /> (But Didn&apos;t)
        </h2>
        <p className="font-lato font-normal text-lg text-black-50 flex-1">
          Find clear, straightforward answers to the most common questions about
          how Scoutflair works, helping you navigate the platform with ease.
        </p>
      </div>

      <div className="flex gap-10 mt-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex flex-col gap-8">
            {/* General Questions */}
            <div>
              <h2 className="font-manrope font-semibold text-xl mb-2 text-primary">
                General Questions
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    id: "item-1",
                    question: "What is Scoutflair, and how does it work?",
                    answer:
                      "Scoutflair is a football scouting platform designed to connect talented players with scouts and coaches looking for the next big star. Players can create detailed profiles showcasing their skills, stats, and highlight videos, making it easier for scouts to discover them.",
                  },
                  {
                    id: "item-2",
                    question: "Who can use Scoutflair—players, scouts, or coaches?",
                    answer:
                      "Scoutflair is designed for all football enthusiasts, including players, scouts, and coaches. Players can showcase their skills and stats, scouts can discover promising talent, and coaches can evaluate and recruit players for their teams.",
                  },
                  {
                    id: "item-3",
                    question: "Is Scoutflair free to use, or are there subscription plans?",
                    answer:
                      "Scoutflair offers both free and premium subscription plans. Players can create basic profiles for free, while premium plans unlock additional features such as advanced analytics, video uploads, and direct messaging.",
                  },
                ].map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl px-4 py-3">
                    <div
                      className="font-lato font-semibold text-black-50 text-lg flex justify-between w-full cursor-pointer"
                      onClick={() => handleToggle(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="ml-2 text-2xl">
                        {openItem === item.id ? "-" : "+"}
                      </span>
                    </div>
                    {openItem === item.id && (
                      <p className="font-lato font-normal text-black-50 text-xs mt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

             {/* For Scouts */}
                <div>
              <h2 className="font-manrope font-semibold text-xl mb-2 text-primary">
                For Scouts
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    id: "item-4",
                    question: "How do I search for players on Scoutflair?",
                    answer:
                    "Scouts and coaches can easily find players on Scoutflair using the advanced search and filtering system. Simply log into your account and navigate to the Player Search section, where you can filter players based on position, age, nationality, playing style, skill level, and other key attributes. For a more precise search, you can use keywords, performance stats, and highlight videos to assess a player&apos;s capabilities. Once you find promising talent, you can save profiles, compare players, and reach out to them directly through the platform."
                  },
                  {
                    id: "item-5",
                    question: "What kind of player data and stats are available?",
                    answer:
                      "Player profiles include key metrics such as position, height, weight, playing style, match statistics, performance ratings, and highlight videos. Scouts can filter players based on these stats to find the right talent.",
                  },
                  {
                    id: "item-6",
                    question: "Can I contact players directly through the platform?",
                    answer:
                      "Scoutflair offers both free and premium subscription plans. Players can create basic profiles for free, while premium plans unlock additional features such as advanced analytics, video uploads, and direct messaging.",
                  },
                ].map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl px-4 py-3">
                    <div
                      className="font-lato font-semibold text-black-50 text-lg flex justify-between w-full cursor-pointer"
                      onClick={() => handleToggle(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="ml-2 text-2xl">
                        {openItem === item.id ? "-" : "+"}
                      </span>
                    </div>
                    {openItem === item.id && (
                      <p className="font-lato font-normal text-black-50 text-xs mt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical and Support */}
            <div>
              <h2 className="font-manrope font-semibold text-xl mb-2 text-primary">
              Technical and Support
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    id: "item-7",
                    question: "Who do I contact for support?",
                    answer:
                    "If you need assistance, you can reach out to Scoutflair’s support team through the Contact Us page, email, or live chat available on the platform."
                  },
                  {
                    id: "item-8",
                    question: "How do I delete my account if I no longer need it?",
                    answer:
                      " You can delete your account by navigating to the settings section of your profile and selecting the &quot;Delete Account&quot; option. If you need further assistance, you can contact customer support.",
                  },
                ].map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl px-4 py-3">
                    <div
                      className="font-lato font-semibold text-black-50 text-lg flex justify-between w-full cursor-pointer"
                      onClick={() => handleToggle(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="ml-2 text-2xl">
                        {openItem === item.id ? "-" : "+"}
                      </span>
                    </div>
                    {openItem === item.id && (
                      <p className="font-lato font-normal text-black-50 text-xs mt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

       {/* Right Section */}
       <div className="flex-1">
          <div className="flex flex-col gap-8">
            {/* For Players */}
            <div>
              <h2 className="font-manrope font-semibold text-xl mb-2 text-primary">
                For Players
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    id: "item-9",
                    question: "How do I create a profile as a player?",
                    answer:
                      "Creating a profile on Scoutflair is simple and essential for getting noticed by scouts and coaches...",
                  },
                  {
                    id: "item-10",
                    question: "How do scouts find my profile?",
                    answer:
                      "Scouts use Scoutflair’s search tools to discover players based on skills, positions, and stats. Keeping your profile updated with videos and achievements increases your chances of being found.",
                  },
                  {
                    id: "item-11",
                    question: "What happens when a scout shows interest in me?",
                    answer:
                      "You’ll receive a notification when a scout expresses interest. You can then connect with them directly to discuss potential opportunities and next steps.",
                  },
                ].map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl px-4 py-3">
                    <div
                      className="font-lato font-semibold text-black-50 text-lg flex justify-between w-full cursor-pointer"
                      onClick={() => handleToggle(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="ml-2 text-2xl">
                        {openItem === item.id ? "-" : "+"}
                      </span>
                    </div>
                    {openItem === item.id && (
                      <p className="font-lato font-normal text-black-50 text-xs mt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

             {/* For Coaches */}
                <div>
              <h2 className="font-manrope font-semibold text-xl mb-2 text-primary">
              For Coaches
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    id: "item-12",
                    question: "How can coaches use Scoutflair to find and recruit players?",
                    answer:
                    "Coaches can leverage Scoutflair to identify, evaluate, and connect with top football talent. The platform provides access to a vast pool of players, each with a detailed profile showcasing stats, skills, and highlight videos, making it easier to assess potential recruits. Coaches can search for players based on specific criteria, compare prospects, track their progress over time, and build a shortlist of those who match their team’s requirements. With advanced scouting tools, streamlined communication features, and real-time player updates."
                  },
                  {
                    id: "item-13",
                    question: "Can I track multiple players and compare them?",
                    answer:
                      "Yes, Scoutflair allows coaches to track multiple players, compare stats, and monitor their development over time for informed recruitment decisions.",
                  },
                  {
                    id: "item-14",
                    question: "Is Scoutflair free to use, or are there subscription plans?",
                    answer:
                      "Scoutflair offers a free version with basic features. For enhanced tools like advanced analytics and player tracking, premium subscription plans are available.",
                  },
                ].map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl px-4 py-3">
                    <div
                      className="font-lato font-semibold text-black-50 text-lg flex justify-between w-full cursor-pointer"
                      onClick={() => handleToggle(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="ml-2 text-2xl">
                        {openItem === item.id ? "-" : "+"}
                      </span>
                    </div>
                    {openItem === item.id && (
                      <p className="font-lato font-normal text-black-50 text-xs mt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Password Reset */}
            <div>
              <h2 className="font-manrope font-semibold text-xl mb-2 text-primary">
              Password Reset
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    id: "item-15",
                    question: "How do I reset my password if I forget it?",
                    answer:
                    "Click on ‘Forgot Password’ on the login page, enter your email, and follow the instructions sent to reset your password."
                  },
                  {
                    id: "item-16",
                    question: "What should I do if I experience issues with my profile?",
                    answer:
                      "If you encounter issues with your profile, contact Scoutflair support via the Help Center or email for assistance in resolving your concerns.",
                  },
                ].map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl px-4 py-3">
                    <div
                      className="font-lato font-semibold text-black-50 text-lg flex justify-between w-full cursor-pointer"
                      onClick={() => handleToggle(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="ml-2 text-2xl">
                        {openItem === item.id ? "-" : "+"}
                      </span>
                    </div>
                    {openItem === item.id && (
                      <p className="font-lato font-normal text-black-50 text-xs mt-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Faq;
