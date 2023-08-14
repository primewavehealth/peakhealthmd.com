import Image from "next/image";

function Team() {
 return (
  <div className="w-4/5 pt-8 mx-auto lg:p-12">
   <Image
    alt="primewavehealth-team"
    src="/images/primewavehealth-team.jpg"
    className="object-cover"
    width={1500}
    height={1125}
    quality={100}
    loading="lazy"
   />
  </div>
 );
}

export default Team;
