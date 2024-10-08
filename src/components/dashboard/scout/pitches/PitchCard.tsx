import React, { FC } from "react";

import Image from "next/image";

import { FaStar } from "react-icons/fa";
import { TiHeart } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { iLocalPitchResponse } from "@/src/hooks/pitch";

const PitchCard: FC<{ pitch: iLocalPitchResponse }> = ({ pitch }) => {
  return (
    <div className="bg-white shadow-custom rounded-xl flex gap-5 px-3 py-2">
      {/* <div className="w-10 flex flex-col items-center gap-1">
        <Image
          src={pitch.img}
          alt="pitch image"
          width={40}
          height={40}
          className="object-cover size-10 rounded"
        />
        <div className="items-center justify-center flex w-fit gap-0.5">
          <FaStar size={8} className={`text-secondary-3`} />
          <p className="text-8-9 text-dark font-medium">{pitch.rating}</p>
        </div>
      </div>
      <div className="w-[calc(100%-3.75rem)] flex flex-col justify-between">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-12-14 font-semibold text-dark">{pitch.name}</h2>
            <TiHeart
              className={`${pitch.liked ? "text-error" : "text-border-gray"}`}
              size={16}
            />
          </div>
          <div className="flex items-center w-fit gap-0.5">
            <IoLocationOutline className={`text-dark`} size={10} />
            <h2 className="text-8-9 text-dark">{pitch.location}</h2>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 text-8-9 text-dark">
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Year Built:</h3>
            <p className="text-6-7">{pitch.year}</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Capacity:</h3>
            <p className="text-6-7">{pitch.capacity}</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-8-9">Facilities:</h3>
            <p className="text-6-7">{pitch.facilities}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PitchCard;
