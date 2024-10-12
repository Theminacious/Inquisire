import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button"; // Assuming Button is from ShadCN
import { ArrowRight, UploadCloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* MaxWidthWrapper with slate theme */}
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center bg-slate-800 p-8 rounded-lg shadow-lg">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-slate-700 bg-slate-700 px-7 py-2 shadow-md transition-all hover:border-slate-600">
          <p className="text-sm font-semibold text-slate-300">
            Insquire is now publicly available!
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold md:text-6xl lg:text-7xl text-slate-100 leading-tight">
          Engage with Your <span className="text-blue-400">Documents</span>
        </h1>

        <p className="mt-5 max-w-prose text-slate-400 sm:text-lg leading-relaxed">
          With Insquire, you can easily interact with any PDF document. Upload your file and start asking questions immediately!
        </p>

        <Link href="/dashboard" target="_blank">
          <Button className="mt-6 inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 text-lg font-semibold shadow-lg hover:bg-blue-500 transition-all transform hover:scale-105">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </MaxWidthWrapper>

      {/* Features Section */}
      <div className="relative isolate">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-80">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="-m-2 rounded-xl bg-slate-800 p-8 ring-1 ring-inset ring-slate-700 lg:-m-4 lg:rounded-2xl lg:p-10">
            <Image
              src="/dashboard-preview.png"
              alt="Product preview"
              width={1364}
              height={866}
              quality={100}
              className="rounded-md bg-slate-700 p-4 shadow-2xl ring-1 ring-slate-700 transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-slate-100 sm:text-5xl">
              Start Chatting in Minutes
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Engaging with your PDF files has never been easier than with Insquire. Discover how intuitive and efficient it can be!
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          {[{
            step: "Step 1",
            title: "Create Your Account",
            description: (
              <>
                Choose between our free plan or upgrade to our{" "}
                <Link href="/products" className="text-blue-500 underline underline-offset-2">
                  pro plan
                </Link>{" "}
                for enhanced features.
              </>
            ),
          },
          {
            step: "Step 2",
            title: "Upload Your PDF",
            description: "Easily upload your PDF document. We’ll prepare it for seamless interaction.",
          },
          {
            step: "Step 3",
            title: "Ask Away!",
            description: "Start chatting with your document—it's that simple! Experience Insquire in action today.",
          }].map((item, index) => (
            <li key={index} className="md:flex-1">
              <div className="flex flex-col space-y-2 bg-slate-800 p-4 rounded-lg shadow-lg border-t-4 border-blue-400 hover:shadow-xl transition-shadow duration-300">
                <span className="text-sm font-medium text-blue-600">{item.step}</span>
                <span className="text-xl font-semibold text-slate-100">{item.title}</span>
                <span className="mt-2 text-slate-400">{item.description}</span>
              </div>
            </li>
          ))}
        </ol>

        {/* Upload Document Section */}
        <div className="relative isolate mx-auto max-w-6xl px-6 lg:px-8 mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <h2 className="text-4xl font-bold text-slate-100 text-center mb-4">
            Upload Your Documents Effortlessly
          </h2>
          <p className="text-lg text-slate-400 text-center mb-8">
            Experience the simplicity of uploading your PDFs and getting started quickly with Insquire.
          </p>

          {/* Icon Section */}
          <div className="flex justify-center mb-4">
            <UploadCloud className="h-10 w-10 text-blue-500" />
          </div>

          <div className="rounded-lg bg-slate-800 p-6 shadow-lg transition-transform transform hover:scale-105">
            <Image
              src="/file-upload-preview.jpg"
              alt="Uploading Preview"
              width={1419}
              height={732}
              quality={100}
              className="rounded-md bg-slate-700 p-4 shadow-md ring-1 ring-slate-700 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
