module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    backgroundImage: theme => ({
      'set': "url('/img/hero/hero-1.jpg')",
      'set1': "url('img/footer-bg.jpg')"
    }),
    height: {
      slide: '700px',
    },
    inset: {
      '1/2': '50%',
    },
    extend: {
      zIndex: {
        '1': '1',
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    animation: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
