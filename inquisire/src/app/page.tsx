import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button"; // Assuming Button is from ShadCN
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center bg-slate-900 p-8 rounded-lg shadow-lg">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-slate-700 bg-slate-800 px-7 py-2 shadow-md transition-all hover:border-slate-500">
        <p className="text-sm font-semibold text-gray-300">
          Insquire is public baby
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-white leading-tight">
        Chat With Your <span className="text-blue-400">Documents</span>
      </h1>
      <p className="mt-5 max-w-prose text-gray-400 sm:text-lg leading-relaxed">
        Insquire allows you to have conversations with any PDF document. Simply upload your file and start asking questions right away.
      </p>

      <Link href='/dashboard' target='_blank'>
        <Button className="mt-6 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
          Get Started <ArrowRight className='ml-2 h-5 w-5' />
        </Button>
      </Link>
    </MaxWidthWrapper>
      {/**/}

      <div>
        <div className="relative isolate">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-80" >
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image src='/dashboard-preview.png' alt="Product preview"
                  width={1364}
                  height={866}
                  quality={100} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
