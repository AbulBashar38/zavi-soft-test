import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const FooterTop = () => {
  return (
    <div className="px-6 sm:pt-10 pt-5 pb-10 text-white sm:px-12 sm:py-12">
      <div className="grid items-center gap-5 sm:gap-10 md:grid-cols-2">
        <div className="sm:space-y-5 space-y-3 w-full">
          <h4 className="max-w-lg text-xl font-bold uppercase leading-[1.12] sm:text-5xl">
            Join our KicksPlus Club & get 15% off
          </h4>
          <p className="text-sm text-accent sm:text-2xl">
            Sign up for free! Join the community.
          </p>
          <form className="flex max-w-md items-center gap-2">
            <Input
              type="email"
              placeholder="Email address"
              className="h-11 border-white/50 bg-primary text-white placeholder:text-accent"
            />
            <Button
              type="submit"
              className="h-11 rounded-md bg-foreground px-6 text-xs tracking-wide text-white hover:bg-foreground/90"
            >
              SUBMIT
            </Button>
          </form>
        </div>

        <div className="flex justify-start md:justify-center">
          <Image
            src="/images/logo-white-with-plus.svg"
            alt="Kicks Plus"
            width={320}
            height={105}
            className="h-auto w-52 sm:w-72"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
