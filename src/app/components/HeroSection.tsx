import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="yellow"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50  to-neutral-400">
          Hey this is Mahtab Azam
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Striving to secure and maintain a challenging position in a reputed
          organization so that I can expand my learning, knowledge, and polish
          my skills, and maintain a responsible career opportunity so that I can
          fully utilize my training and skills.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>Explore Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
