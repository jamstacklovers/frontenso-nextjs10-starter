module.exports = {
  presets: [
    'next-babel',
    [
      '@linaria',
      {
        evaluate: true,
        displayName: process.env.NODE_ENV !== 'production',
      },
    ],
  ],
};
