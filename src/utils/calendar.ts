// Calendar state management
interface CalendarState {
  month: number;
  year: number;
  view: 'grid' | 'list';
}

class CalendarManager {
  private static instance: CalendarManager;
  private state: CalendarState;
  private subscribers: ((state: CalendarState) => void)[] = [];

  private constructor() {
    const today = new Date();
    this.state = {
      month: today.getMonth(),
      year: today.getFullYear(),
      view: 'grid',
    };

    // Load saved view preference
    const savedView = localStorage.getItem('calendarView');
    if (savedView === 'grid' || savedView === 'list') {
      this.state.view = savedView;
    }

    // Initialize from URL if available
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const monthParam = url.searchParams.get('month');
      const yearParam = url.searchParams.get('year');
      
      if (monthParam && yearParam) {
        const month = parseInt(monthParam);
        const year = parseInt(yearParam);
        if (!isNaN(month) && !isNaN(year)) {
          this.state.month = month;
          this.state.year = year;
        }
      }
    }
  }

  public static getInstance(): CalendarManager {
    if (!CalendarManager.instance) {
      CalendarManager.instance = new CalendarManager();
    }
    return CalendarManager.instance;
  }

  public getState(): CalendarState {
    return { ...this.state };
  }

  public subscribe(callback: (state: CalendarState) => void) {
    this.subscribers.push(callback);
    callback(this.getState());
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  private notify() {
    this.subscribers.forEach(callback => callback(this.getState()));
  }

  public setView(view: 'grid' | 'list') {
    this.state.view = view;
    localStorage.setItem('calendarView', view);
    this.notify();
  }

  public navigateMonth(direction: 'prev' | 'next' | 'today') {
    const currentDate = new Date(this.state.year, this.state.month);
    
    switch (direction) {
      case 'prev':
        currentDate.setMonth(currentDate.getMonth() - 1);
        break;
      case 'next':
        currentDate.setMonth(currentDate.getMonth() + 1);
        break;
      case 'today':
        const today = new Date();
        currentDate.setMonth(today.getMonth());
        currentDate.setFullYear(today.getFullYear());
        break;
    }

    this.state.month = currentDate.getMonth();
    this.state.year = currentDate.getFullYear();

    // Update URL without page reload
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('month', this.state.month.toString());
      url.searchParams.set('year', this.state.year.toString());
      window.history.pushState({}, '', url.toString());
    }

    this.notify();
  }
}

export const calendarManager = CalendarManager.getInstance();
