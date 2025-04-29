// Utility function to implement smooth scrolling
export const smoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string): void => {
  event.preventDefault();
  
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    // Get the target's position relative to the viewport
    const targetPosition = targetElement.getBoundingClientRect().top;
    // Get the current scroll position
    const startPosition = window.pageYOffset;
    // Calculate the distance to scroll
    const distance = targetPosition;
    
    // Set the duration of the scroll animation in milliseconds
    const duration = 1000;
    // Set the start time
    let startTime: number | null = null;
    
    // Animation function
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollY = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollY);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    // Easing function for smooth animation
    function easeInOutQuad(t: number, b: number, c: number, d: number): number {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    // Start the animation
    requestAnimationFrame(animation);
  }
};

// Function to handle header link clicks
export const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
  const href = event.currentTarget.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    const targetId = href.substring(1);
    smoothScroll(event, targetId);
  }
};