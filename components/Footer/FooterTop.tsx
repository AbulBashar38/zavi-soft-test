"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";

const FooterTop = () => {
  return (
    <div className="px-6 sm:pt-10 pt-5 pb-10 text-white sm:px-12 sm:py-12">
      <div className="grid items-center gap-5 sm:gap-10 md:grid-cols-2">
        <motion.div
          className="sm:space-y-5 space-y-3 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h4 className="max-w-lg text-xl font-bold uppercase leading-[1.12] sm:text-5xl">
            Join our KicksPlus Club & get 15% off
          </h4>
          <p className="text-sm text-accent sm:text-2xl">
            Sign up for free! Join the community.
          </p>
          <div className="flex max-w-md items-center gap-2">
            <Input
              type="email"
              placeholder="Email address"
              className="h-11 border-white/50 bg-primary text-white placeholder:text-accent"
            />
            <Button variant={"secondary"}>SUBMIT</Button>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-start md:justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src="/images/logo-white-with-plus.svg"
            alt="Kicks Plus"
            width={320}
            height={105}
            className="h-auto w-52 sm:w-72"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FooterTop;
