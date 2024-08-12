import React from "react";

interface Props {}

function Laws(props: Props) {
  const {} = props;

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Punishment for Ragging
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600">
          The Indian Penal Court has laid out a list of punishments against
          Ragging
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          <div
            className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="p-3 text-white bg-blue-500 rounded-full"
              data-primary="blue-500"
              data-rounded="rounded-full"
            >
              1st
            </div>
            <h4 className="text-xl font-medium text-gray-700">
              Certifications
            </h4>
            <p className="text-base text-center text-gray-500">
            Suspension, expulsion, or rustication from the institution
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="p-3 text-white bg-blue-500 rounded-full"
            >
            2nd
            </div>
            <h4 className="text-xl font-medium text-gray-700">Notifications</h4>
            <p className="text-base text-center text-gray-500">
            Cancellation of admission
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="p-3 text-white bg-blue-500 rounded-full"
              data-primary="blue-500"
              data-rounded="rounded-full"
            >
              3rd
            </div>
            <h4 className="text-xl font-medium text-gray-700">Bundles</h4>
            <p className="text-base text-center text-gray-500">
            Withholding scholarships or other benefits
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="p-3 text-white bg-blue-500 rounded-full"
              data-primary="blue-500"
              data-rounded="rounded-full"
            >
              4th
            </div>
            <h4 className="text-xl font-medium text-gray-700">
              Developer Tools
            </h4>
            <p className="text-base text-center text-gray-500">
            Debarring from representation in events
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="p-3 text-white bg-blue-500 rounded-full"
              data-primary="blue-500"
              data-rounded="rounded-full"
            >
              5th
            </div>
            <h4 className="text-xl font-medium text-gray-700">
              Building Blocks
            </h4>
            <p className="text-base text-center text-gray-500">
            Criminal prosecution under the Indian Penal Code
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
            data-rounded="rounded-xl"
            data-rounded-max="rounded-full"
          >
            <div
              className="p-3 text-white bg-blue-500 rounded-full"
              data-primary="blue-500"
              data-rounded="rounded-full"
            >
              6th
            </div>
            <h4 className="text-xl font-medium text-gray-700">Coupons</h4>
            <p className="text-base text-center text-gray-500">
              Juveliene Jail time as per the degree of offence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Laws;
