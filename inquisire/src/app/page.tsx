import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-2 border-gray-700 bg-black px-8 py-3 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-xl">
        <p className="text-sm font-bold text-white">
          insquire is public baby
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
