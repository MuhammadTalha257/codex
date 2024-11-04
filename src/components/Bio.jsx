import React from "react";
import { BIO } from "../constants"


const Bio = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center max-w-4xl gap-12 pt-20 mx-auto min-h-screen" id="bio">
    <h2 className="mb-8 text-center text-3xl lg:text-4xl">Bio</h2>
    <div>
      {BIO.map((bio, index) => (
        <p key={index} className="mb-4 text-lg lg:text-xl">
          {bio}
        </p>
      ))}
    </div>
  </section>
  
  )
}

export default Bio