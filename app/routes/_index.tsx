import type { MetaFunction } from "@remix-run/node";
import { DashboardLayout } from '../components/Layout';
import { RiAddLine, RiCheckboxCircleLine, RiCalendarLine, RiFlag2Line } from '../lib/icons';
import { Icon } from '../components/Icon';

export const meta: MetaFunction = () => {
  return [
    { title: "Listify - Your Beautiful Todo App" },
    { name: "description", content: "A beautiful task management app built with Remix" },
  ];
};

export default function Index() {
  const handleSearchClick = () => {
    alert('🔍 Search functionality coming soon!');
  };

  const handleProfileClick = () => {
    alert('👤 Profile menu coming soon!');
  };

  // Placeholder sidebar content matching Figma design
  const sidebarContent = (
    <div className="p-6">
      <div className="bg-surface rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-text-secondary">Hello, Aqeel</span>
          <span className="text-xs text-text-muted">Start planning today</span>
        </div>
        <div className="text-xs text-text-secondary mb-2">Saturday</div>
        <div className="text-lg font-semibold text-text-primary mb-3">04</div>
        
        <div className="space-y-3">
          <div className="bg-linen rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Learn Javascript</span>
              <Icon icon={RiCheckboxCircleLine} size="sm" className="text-success" />
            </div>
            <div className="text-xs text-text-secondary">Start date: 07-07-2023</div>
          </div>
          
          <div className="bg-linen rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Learn Javascript</span>
              <Icon icon={RiCheckboxCircleLine} size="sm" className="text-success" />
            </div>
            <div className="text-xs text-text-secondary">Start date: 07-07-2023</div>
          </div>
        </div>
      </div>
      
      <div className="bg-surface rounded-lg p-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-text-primary mb-1">04</div>
          <div className="text-xs text-text-secondary">upcoming task</div>
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout
      userName="Aqeel"
      currentPath="/"
      onSearchClick={handleSearchClick}
      onProfileClick={handleProfileClick}
      sidebar={sidebarContent}
    >
      {/* Main Content */}
      <div className="p-6">
        {/* Greeting Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Hello, Aqeel
          </h1>
          <p className="text-text-secondary">Start planning today</p>
        </section>

        {/* Add Task Form */}
        <section className="mb-8">
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="type Title of task"
              className="flex-1 bg-[#dbe2ef] placeholder:text-text-secondary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <input
              type="text"
              placeholder="Detail of your task"
              className="flex-1 bg-[#dbe2ef] placeholder:text-text-secondary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="bg-success text-white rounded-lg px-6 py-3 flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-success/20"
            >
              <Icon icon={RiAddLine} size="md" />
            </button>
          </form>
        </section>

        {/* Statistics Cards Preview */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-success text-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">04</div>
              <div className="text-sm opacity-90">COMPLETED</div>
            </div>
            <div className="bg-salmon text-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-sm opacity-90">PENDING</div>
            </div>
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">1,500</div>
              <div className="text-sm opacity-90">TOTAL PROJECTS</div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Preview */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
              <Icon icon={RiCalendarLine} className="mr-2 text-primary" />
              Calendar
            </h2>
            <div className="bg-surface rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-text-primary">04, April 2024</h3>
                <p className="text-text-secondary text-sm">Sat</p>
              </div>
              
              {/* Simple calendar grid preview */}
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                  <div key={day} className="p-2 text-text-secondary font-medium">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6; // Start from previous month
                  const isCurrentMonth = day > 0 && day <= 30;
                  const isToday = day === 4;
                  
                  return (
                    <div
                      key={i}
                      className={`
                        p-2 rounded
                        ${isCurrentMonth 
                          ? isToday 
                            ? 'bg-primary text-white font-semibold' 
                            : 'text-text-primary hover:bg-primary/10'
                          : 'text-text-muted'
                        }
                      `}
                    >
                      {isCurrentMonth ? day : ''}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Task Preview */}
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
              <Icon icon={RiFlag2Line} className="mr-2 text-primary" />
              Recent Tasks
            </h2>
            <div className="space-y-4">
              <div className="bg-linen rounded-lg p-4 flex items-start space-x-4">
                <button className="mt-1">
                  <Icon icon={RiCheckboxCircleLine} className="text-success" size="lg" />
                </button>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary">Learn JavaScript</h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Master the language powering the modern web.
                  </p>
                  <div className="flex items-center mt-2 text-xs space-x-3">
                    <span className="text-text-secondary">Jul 20, 2025</span>
                    <span className="bg-surface px-2 py-1 rounded text-text-muted">learning</span>
                    <span className="bg-salmon text-white px-2 py-1 rounded">high</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface rounded-lg p-4">
                <div className="text-center py-8">
                  <Icon icon={RiAddLine} className="mx-auto text-text-muted mb-3" size="xl" />
                  <p className="text-text-secondary">More task components coming soon...</p>
                  <p className="text-text-muted text-sm">Next: Calendar Component (LIS2-5)</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Preview */}
        <footer className="mt-12 pt-8 border-t border-text-secondary/20">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-secondary">
              © 2024 Vista Lab. All Rights Reserved.
            </span>
            <div className="text-primary font-medium text-sm">
              🚀 Built with Remix + MongoDB + React Icons
            </div>
          </div>
        </footer>
      </div>
    </DashboardLayout>
  );
}
