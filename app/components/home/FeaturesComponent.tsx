export default function FeaturesComponent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-1 sm:grid-rows-2 md:grid-rows-1 gap-10 justify-center items-center text-center w-full main-padding mt-[90px] lg:gap-10">
      <div className="">
        <div className="flex flex-col gap-1 text-center justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#2AB7B1"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-gem-icon lucide-gem"
          >
            <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
            <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
            <path d="M2 9h20" />
          </svg>
          <h3 className="font-bold">Premium Quality Fabrics</h3>
          <p className="text-sm text-slate-500">Soft &amp; durable materials</p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-1 text-center justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#E96D92"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-leaf-icon lucide-leaf"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <h3 className="font-bold">Organic Cotton</h3>
          <p className="text-sm text-slate-500">Kind to young skin</p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-1 text-center justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#2AB7B1"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-palette-icon lucide-palette"
          >
            <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          </svg>
          <h3 className="font-bold">Unique Designs</h3>
          <p className="text-sm text-slate-500">
            Styles you won't find elsewhere
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-1 text-center justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#E96D92"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart-plus-icon lucide-heart-plus"
          >
            <path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" />
            <path d="M15 15h6" />
            <path d="M18 12v6" />
          </svg>
          <h3 className="font-bold">Family Support</h3>
          <p className="text-sm text-slate-500">We're here to help</p>
        </div>
      </div>
    </div>
  );
}
