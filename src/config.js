module.exports = {
  email: 'abdulsalamelelu@g@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kehinde-elelu',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zalamii/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Zalami_Elu',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kehinde-elelu-737242170/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#F9F9F9',
    navy: '#F9F9F9',
    darkNavy: '#F9F9F9',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
