import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone"; // Assuming Phone is a custom component
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/snake-1.png"
                  width={112}
                  height={112}
                  alt="Snake decoration"
                  className="w-full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> Phone case.
                CaseCustom allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    print guaranteed
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  {[
                    "/users/user-1.png",
                    "/users/user-2.png",
                    "/users/user-3.png",
                    "/users/user-4.jpg",
                    "/users/user-5.jpg",
                  ].map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      width={40}
                      height={40}
                      className="inline-block h-10 w-10 rounded-full ring-slate-100"
                      alt={`user ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 text-green-600 fill-green-600"
                      />
                    ))}
                  </div>
                  <p>
                    <span className="font-semibold">1,250</span> Happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-ft">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                width={208}
                height={208}
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                alt="Your image"
              />
              <Image
                src="/line.png"
                width={80}
                height={80}
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="Line decoration"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg">
                {/* check the photo why it is not loading */}
              </Phone>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Value proposition sec*/}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2
              className="order-1 mt-2 tracking-tight text-center text-balance 
            !leading-tight font-bold text-5xl md:text-6xl
            text-gray-900"
            >
              What our{" "}
              <span className="relative px-2">
                customers
                <Icons.underline
                  className="hidden sm:block pointer-events-none absolute inset-x-0
                -bottom-6 text-green-500"
                />
              </span>{" "}
              say
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
          </div>

          <div
            className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2
          gap-y-16"
          >
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I love my new case! The quality is amazing and the print is
                  perfect. I am m so happy with my purchase. Thank you!"
                </p>
              </div>
              <div className="flext gap-4 mt-2">
                <img
                  src="/users/user-1.png"
                  className="rounded-full h-12 w-12 object-cover"
                  alt="user"
                />

                <div className="flex flex-col">
                  <p className="font-semibold">Chandrapala</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 strole-[3px] text-green-600" />
                    <p className="text-sm">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I recently purchased a simple phone case for my iPhone, and I
                  am thoroughly impressed with its quality and functionality.
                  Here are a few key points about why I love this case."
                </p>
              </div>
              <div className="flext gap-4 mt-2">
                <img
                  src="/users/user-2.png"
                  className="rounded-full h-12 w-12 object-cover"
                  alt="user"
                />

                <div className="flex flex-col">
                  <p className="font-semibold">Mohini</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 strole-[3px] text-green-600" />
                    <p className="text-sm">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
                <Reviews/>
        </div>
      </section>
    </div>
  );
}
