export interface UIDict {
  nav: {
    services: string;
    expertise: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  services: {
    title: string;
    items: {
      customDev: {
        title: string;
        description: string;
      };
      cloud: {
        title: string;
        description: string;
      };
      staff: {
        title: string;
        description: string;
      };
      training: {
        title: string;
        description: string;
      };
      interviews: {
        title: string;
        description: string;
      };
      consulting: {
        title: string;
        description: string;
      };
    };
  };
  expertise: {
    title: string;
    items: {
      web: {
        title: string;
        description: string;
      };
      mobile: {
        title: string;
        description: string;
      };
      desktop: {
        title: string;
        description: string;
      };
      cloud: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    description: string;
    cta: string;
  };
} 