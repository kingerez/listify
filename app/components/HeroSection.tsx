interface HeroSectionProps {
  userName?: string;
  currentDate?: Date;
  className?: string;
}

export default function HeroSection({ 
  userName = "Aqeel", 
  currentDate = new Date(),
  className = ""
}: HeroSectionProps) {
  // Format the date to match Figma design: "04. April 2024"
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day}. ${month} ${year}`;
  };

  return (
    <section className={`py-8 ${className}`}>
      <div className="container-app">
        <div className="max-w-4xl">
          {/* Main greeting */}
          <div className="mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 text-balance">
              Hello, <span className="text-primary-600">{userName}</span>, Start planning today
            </h1>
            
            {/* Current date */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <time 
                  dateTime={currentDate.toISOString().split('T')[0]}
                  className="text-lg font-medium"
                >
                  {formatDate(currentDate)}
                </time>
              </div>
            </div>
          </div>

          {/* Optional subtitle/description */}
          <div className="max-w-2xl">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Organize your tasks, track your progress, and achieve your goals with our intuitive task management system.
            </p>
          </div>

          {/* Quick stats or highlights */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                Ready to boost productivity
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                Track your daily progress
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                Stay organized and focused
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 