"use client";

import Link from "next/link";
import CourseData from "../data/courses.json";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  isFeatured: boolean;
}

function CourseSection() {
  const featuredCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Courses
        </h2>
        <p className="mt-2 text-3xl leading-8 tracking-tight text-white sm:text-4xl">
          Aik baar Seekh lo
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className=" flex flex-colrounded-[22px] max-w-sm h-full p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden">
                <div className="p-2 sm:p-6 flex- flex-coln items-center text-center flex-grow">
                  <p className="font-bold text-xl mb-5">{course.title}</p>
                  <p className="text-2xl text-white-700  mb-10">
                    {course.description}
                  </p>
                  <Link
                    className="mt-20 text-center"
                    href={`/courses/${course.slug}`}
                  >
                    <Button borderRadius="1.75rem">Explore This</Button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/Explore"}>
          <Button borderRadius="1.75rem">Explore This</Button>
        </Link>
      </div>
    </div>
  );
}

export default CourseSection;
