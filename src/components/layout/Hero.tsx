import { Triangle } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative mx-4 mt-4 h-[420px] overflow-hidden rounded-3xl sm:mx-8 sm:mt-8 sm:h-[460px]">
      <img
        src="pic1.1.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-rowad-navy/90 via-rowad-navy/60 to-rowad-navy/20" />

      <div className="relative mx-auto flex h-full max-w-5xl flex-col justify-center px-6 sm:px-10">
        <div className="mb-6 flex items-center gap-2">
          <Triangle
            size={22}
            className="fill-rowad-red text-rowad-red"
            strokeWidth={0}
          />
          <div className="leading-tight">
            <p className="text-lg font-bold tracking-wide text-white">ROWAD</p>
            <p className="text-[10px] tracking-[0.2em] text-white/70">
              MODERN ENGINEERING
            </p>
          </div>
        </div>

        <h1 className="max-w-lg text-4xl font-bold leading-tight text-white sm:text-5xl">
          Build the Future with Rowad
        </h1>
        <p className="mt-3 max-w-sm text-lg text-white/85">
          Join our team and help us build tomorrow.
        </p>
      </div>
    </div>
  );
}