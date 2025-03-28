import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import carRentalImage from "../assets/heroImage.jpg"; // Import the image
import Filter from "../components/Hero/filter";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 pt-24 flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-8 mt-20">
        <div className="flex-1 space-y-6 md:space-y-8 px-4 md:pl-14">
          <h1 className="text-5xl md:text-5xl lg:text-7xl text-black text-center lg:text-left mt-4 md:mt-0">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-center lg:text-left">
            <span className="text-primary ">Unlock 24/7</span> with your phone,
            and go!
          </p>
          <Filter />
        </div>

        <div className="flex items-center justify-center w-full lg:w-auto  md:px-0  mt-8 lg:mt-0">
          <img
            src={carRentalImage}
            alt="Car Rental App"
            className="w-full max-w-md  lg:max-w-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}