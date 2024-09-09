"use client";

import React, { useState } from "react";
import Image from "next/image";

import { useCurrentUserStore } from "@/src/stores/userStore";

const Basic = () => {
  const names = useCurrentUserStore((state) => state.name).split(" ");

  const [firstName, setFirstName] = useState<string>(names[0]);
  const [lastName, setLastName] = useState<string>(names[1]);

  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const image =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fman&psig=AOvVaw2Jei2ZqKLfVA1qzm5RCXz5&ust=1725966780899000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMj-hrrdtYgDFQAAAAAdAAAAABAE";

  return (
    <div className="flex flex-col gap-3 w-full ">
      <h2 className="text-dark text-12-14 font-semibold pl-5">
        Basic Information
      </h2>
      <div className="w-full grid grid-cols-[1fr_1.5fr_1.5fr] gap-4 px-5">
        <div className="h-10 flex items-center">
          <h2 className="text-14-16 font-semibold text-placeholder">
            Full Name
          </h2>
        </div>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 pl-4"
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 pl-4"
        />
        <div className="h-10 flex items-center">
          <h2 className="text-14-16 font-semibold text-placeholder">Contact</h2>
        </div>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 pl-4"
        />
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 pl-4"
        />
        <div className="h-10 flex items-center">
          <h2 className="text-14-16 font-semibold text-placeholder">Avatar</h2>
        </div>
        <div className="w-full flex gap-3 items-center">
          <Image
            src={image}
            alt="user image"
            className="rounded-full size-11 object-cover"
            width={44}
            height={44}
          />
          <div className="text-primary-2 border border-primary-2 px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold">
            Upload
          </div>
          <div className="text-error border border-error px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold">
            Remove
          </div>
        </div>
      </div>
      <hr className="w-full bg-[#E0E0E0] mt-1.5 mb-2" />
    </div>
  );
};

export default Basic;
