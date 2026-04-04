import autoprefixer from 'autoprefixer';
import pxToRem from 'postcss-pxtorem';

export default {
  plugins: [
    pxToRem({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }),
    autoprefixer(),
  ],
};
