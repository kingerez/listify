import type { FC } from "react";

interface HeroSectionProps {
  userName: string;
}

const HeroSection: FC<HeroSectionProps> = ({ userName }) => {
  return (
    <section className="py-12 bg-white dark:bg-neutral-800">
      <div className="container-app text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100">
          Hello, {userName}
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Start planning today
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 