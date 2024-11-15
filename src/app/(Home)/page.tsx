import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    // Main container with responsive layout and styling
    <main className="mx-auto my-[10px] flex h-[calc(100vh-115px)] min-h-[400px] w-[90%] max-w-[1300px] items-center justify-center rounded-[20px] bg-[#f8f8f8] md:my-[15px]">
      <section className="mt-[-30px]">
        {/* Logo section */}
        <div className="mx-auto mb-[15px] flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-white p-[15px] shadow-2xl md:mb-[25px] md:h-[120px] md:w-[120px]">
          <div className="relative h-[50px] w-[50px] md:h-[80px] md:w-[80px]">
            <Image src={"/logo.svg"} alt="logo" fill />
          </div>
        </div>

        {/* Text content */}
        <div>
          <h1 className="text-center text-[32px] font-[600] leading-[40px] md:text-[62px] md:leading-[70px]">
            Think, Plan, and track
          </h1>
          <h2 className="mb-[20px] bg-gradient-to-r from-[#5417D7] via-[#6d50c4] to-[#9b4dff] bg-clip-text text-center text-[32px] font-[600] leading-[40px] text-transparent md:mb-[30px] md:text-[62px] md:leading-[70px]">
            all in one place
          </h2>
          <p className="mb-[30px] text-center text-[16px] font-[500] leading-[24px] md:text-[20px]">
            Efficiently manage your tasks and boost productivity
          </p>
        </div>

        {/* Get Started button */}
        <Link
          href="/sign-up"
          className="relative z-[1] mx-auto block w-fit rounded-[10px] bg-white px-[30px] py-[15px] text-center text-[18px] font-[600] leading-[22px] text-white transition-all ease-in-out before:absolute before:left-0 before:top-0 before:z-[-1] before:h-[100%] before:w-[100%] before:rounded-[10px] before:bg-gradient-to-l before:from-[#5417D7] before:via-[#6d50c4] before:to-[#9b4dff] before:opacity-100 before:duration-300 before:content-[''] after:absolute after:left-0 after:top-0 after:z-[-1] after:h-[100%] after:w-[100%] after:rounded-[10px] after:bg-gradient-to-r after:from-[#5417D7] after:via-[#6d50c4] after:to-[#9b4dff] after:opacity-0 after:duration-300 after:content-[''] hover:before:opacity-0 hover:after:opacity-100 md:px-[50px] md:text-[22px] md:leading-[30px]"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default Home;
