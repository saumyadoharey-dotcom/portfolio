"use client";

const image = "/images/creative-license.svg";
const description = "Saumya Doharey’s Creative License card";

export default function CreativeLicense() {
  return (
    <figure className="creative-license">
      <div className="creative-license-frame">
        <img src={image} alt={description} width={1000} height={1000} loading="lazy" />
      </div>
      <figcaption>My creative license.</figcaption>
    </figure>
  );
}
