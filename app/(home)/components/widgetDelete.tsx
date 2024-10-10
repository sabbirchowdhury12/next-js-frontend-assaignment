import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const apps = [
  { name: "Main App", icon: "M", color: "#4caf50", deletable: false },
  { name: "Monarch", icon: "M", deletable: true },
  { name: "secfi", icon: "S", deletable: true },
  { name: "Facet.", icon: "F", deletable: true },
  { name: "ROCKET Money", icon: "F", deletable: true },
  { name: "wealthfront", icon: "F", deletable: true },
  { name: "turbotax", icon: "F", deletable: true },
  { name: "trustwill", icon: "F", deletable: true },
];

export default function WidgetDete() {
  return (
    <section className="overflow-hidden px-5 md:px-28 pt-14 md:pt-8 md:pb-20 pb-8 md:mt-10 relative">
      <div className="container mx-auto max-w-[1243px] mt-4 md:mt-0 pl-8 pr-4  px-28">
        <div className=" w-full pt-14 md:pt-9">
          <div className="">
            <h1 className="font-medium text-[18px] md:text-[65px]  leading-[21.78px] md:leading-[78.66px] tracking-[1px] text-center mb-3 md:mb-5 text-[#020120]">
              Delete your other widgets apps
            </h1>
            <p className="font-medium text-[26px] md:text-[65px]  md:leading-[65.6px] leading-[30.47px] tracking-[1px] text-center pb-12 md:pb-16 text-[#020120]">
              you won't need them.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="p-8 border  border-dashed rounded-[32px] border-[#4E4E5480] md:max-w-[632px]">
              <div className=" grid-cols-4 hidden md:grid gap-x-14 gap-y-10">
                {apps.map((app, index) => (
                  <div key={index} className="relative">
                    <Card
                      className={`w-[90px] h-[90px] border-none rounded-3xl flex items-center justify-center shadow-lg`}
                      style={{
                        backgroundColor: app.color || "#fff",
                      }} // Use inline styles for the background color
                    >
                      {app.color ? (
                        <svg
                          className="w-12 h-12 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                        </svg>
                      ) : (
                        <p className=" text-[#615A56] font-semibold p-8">
                          {app.name}
                        </p>
                      )}
                    </Card>
                    {app.deletable && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute border-none -top-2 -left-2 w-8 h-8 rounded-full bg-[#252527] hover:bg-gray-700"
                      >
                        <div className="w-5 border"></div>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <div className="grid md:hidden grid-cols-2 gap-x-14 gap-y-10">
                {apps.slice(0, 4).map((app, index) => (
                  <div key={index} className="relative">
                    <Card
                      className={`w-[90px] h-[90px] border-none rounded-3xl flex items-center justify-center shadow-lg`}
                      style={{
                        backgroundColor: app.color || "#fff",
                      }} // Use inline styles for the background color
                    >
                      {app.color ? (
                        <svg
                          className="w-12 h-12 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                        </svg>
                      ) : (
                        <p className="text-lg text-[#615A56] font-semibold p-8">
                          {app.name}
                        </p>
                      )}
                    </Card>
                    {app.deletable && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute border-none -top-2 -left-2 w-8 h-8 rounded-full bg-[#252527] hover:bg-gray-700"
                      >
                        <div className="w-5 border"></div>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="z-0 absolute -top-10 -right-[135px]">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="300"
            height="300"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(248, 117, 55, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(251, 168, 31, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="#FAE8FF"
              d="M26,-22.1C29.3,-16.5,24.6,-6,20.7,2.2C16.8,10.4,13.7,16.2,7,22.6C0.2,29,-10.2,35.9,-16.5,33.2C-22.7,30.6,-24.9,18.4,-26.9,6.9C-28.9,-4.6,-30.7,-15.3,-26.2,-21.1C-21.7,-26.9,-10.9,-27.9,0.2,-28.1C11.3,-28.2,22.6,-27.7,26,-22.1Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              stroke="#FAE8FF"
            ></path>
          </svg>
        </div>
        <div className="z-10 absolute -top-16 -right-[120px]">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            width="300"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(248, 117, 55, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(251, 168, 31, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="none"
              d="M26,-22.1C29.3,-16.5,24.6,-6,20.7,2.2C16.8,10.4,13.7,16.2,7,22.6C0.2,29,-10.2,35.9,-16.5,33.2C-22.7,30.6,-24.9,18.4,-26.9,6.9C-28.9,-4.6,-30.7,-15.3,-26.2,-21.1C-21.7,-26.9,-10.9,-27.9,0.2,-28.1C11.3,-28.2,22.6,-27.7,26,-22.1Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="1"
              stroke="#FAE8FF"
            ></path>
          </svg>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="z-0 absolute top-1/2 -left-[135px] ">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="300"
            height="300"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(248, 117, 55, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(251, 168, 31, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="#FAE8FF"
              d="M26,-22.1C29.3,-16.5,24.6,-6,20.7,2.2C16.8,10.4,13.7,16.2,7,22.6C0.2,29,-10.2,35.9,-16.5,33.2C-22.7,30.6,-24.9,18.4,-26.9,6.9C-28.9,-4.6,-30.7,-15.3,-26.2,-21.1C-21.7,-26.9,-10.9,-27.9,0.2,-28.1C11.3,-28.2,22.6,-27.7,26,-22.1Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              stroke="#FAE8FF"
            ></path>
          </svg>
        </div>
        <div className="z-10 absolute top-1/2 -left-[120px]">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            width="300"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(248, 117, 55, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(251, 168, 31, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="none"
              d="M26,-22.1C29.3,-16.5,24.6,-6,20.7,2.2C16.8,10.4,13.7,16.2,7,22.6C0.2,29,-10.2,35.9,-16.5,33.2C-22.7,30.6,-24.9,18.4,-26.9,6.9C-28.9,-4.6,-30.7,-15.3,-26.2,-21.1C-21.7,-26.9,-10.9,-27.9,0.2,-28.1C11.3,-28.2,22.6,-27.7,26,-22.1Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="1"
              stroke="#FAE8FF"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
