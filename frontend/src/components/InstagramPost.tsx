import "./styles/header.css";

export default function InstagramPost() {
  return (
    <>
      <div className="max-w-5xl mt-0 my-0 px-4 pt-0 mx-auto text-center">
        <h3 className="max-w-xl px-8 py-2 mx-auto text-center header-color">
          Acoustic Wave Therapy{" "}
          <span className="header-gradient-color">
            Primewave
          </span>
        </h3>
        
        <p className="mt-4 text-lg leading-7 text-gray-600 text-justify">
        If you're interested in new and emerging medical remedies or additional information on anti-aging and regenerative medicine, subscribe now
        </p>

        <div className="relative pt-[76.25%] my-8">
          <iframe
            src="https://www.instagram.com/p/DHt0GYthqXZ/embed"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            allow="encrypted-media"
            frameBorder="0"
            scrolling="no"
            title="Instagram Video"
          ></iframe>
        </div>
      </div>
    </>
  );
}
