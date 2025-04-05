import profileImages from "./../../../assets/images/pexels-minan1398-926818.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function ProfileOverview() {
  return (
    <div className="w-full overflow-y-auto">
      <h2 className="mb-6 text-3xl font-black">Overview</h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-y-6 pb-20 md:justify-between md:pb-0">
        <ProfileCardInfo />
        <FoundedCompanies />
        <Experience />
      </div>
    </div>
  );
}

function ProfileCardInfo() {
  return (
    <div className="rounded-custom border-lines flex h-52 w-full items-center justify-start border-2 border-solid bg-black px-6">
      <div className="flex items-center gap-4">
        <img
          src={profileImages}
          alt="Profile"
          className="rounded-custom size-32"
        />
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold text-white">Mr A</h3>
          <p className="text-sm text-gray-400">Co-Founder & CEO @Vertx</p>
          <p className="text-xs text-gray-500">Entrepreneur</p>
          <div className="flex gap-3 text-2xl">
            <SiLinkedin />
            <FaXTwitter />
            <SiGmail />
          </div>
        </div>
      </div>
    </div>
  );
}

function FoundedCompanies() {
  return (
    <div className="rounded-custom border-lines md:w-cust49per h-96 w-full border-2 border-solid bg-black p-6">
      <h2 className="text-2xl font-bold">Founded Companies</h2>
      <h3 className="text-[90px] font-black">02</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-white">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-black"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75 9.75-4.366 9.75-9.75S17.384 2.25 12 2.25zm-2.625 6c-.59 0-1.065.475-1.065 1.065v4.87c0 .59.475 1.065 1.065 1.065h5.25c.59 0 1.065-.475 1.065-1.065v-4.87c0-.59-.475-1.065-1.065-1.065h-5.25zM12 14.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="flex content-center items-center gap-1.5">
                <h3 className="text-lg font-semibold">Vertx</h3>
                <span className="rounded bg-green-500 px-1 py-0.5 text-xs font-semibold text-white">
                  CEO
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Founded in 2025. in Fintech.
              </p>
            </div>
          </div>
          <button className="text-sm text-gray-400 hover:text-white">
            View Profile
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-gray-300">
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                ></path>
              </svg>
            </div>
            <div>
              <div className="flex content-center items-center gap-1.5">
                <h3 className="text-lg font-semibold">Company</h3>
                <span className="rounded bg-purple-500 px-1 py-0.5 text-xs font-semibold text-white">
                  PROPRIETOR
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="text-sm text-gray-400">Details/Information</p>
              </div>
            </div>
          </div>
          <button className="text-sm text-gray-400 hover:text-white">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const companies = [1, 2, 3];
  return (
    <div className="rounded-custom border-lines md:w-cust49per h-96 w-full border-2 border-solid bg-black p-6">
      <h2 className="text-2xl font-bold">Experience</h2>
      <h3 className="text-[90px] font-black">03</h3>
      <div className="space-y-4">
        {companies.map((it) => {
          return (
            <div className="flex items-center justify-between" key={it}>
              <div className="flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-black"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75 9.75-4.366 9.75-9.75S17.384 2.25 12 2.25zm-2.625 6c-.59 0-1.065.475-1.065 1.065v4.87c0 .59.475 1.065 1.065 1.065h5.25c.59 0 1.065-.475 1.065-1.065v-4.87c0-.59-.475-1.065-1.065-1.065h-5.25zM12 14.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Company Name {it}</h3>
              </div>
              <button className="text-sm text-gray-400 hover:text-white">
                View Profile
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileOverview;
