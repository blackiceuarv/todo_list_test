import localFont from 'next/font/local';

export const fixelFonts = localFont({
  src: [
    {
      path: '../../../public/fonts/FixelDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/FixelDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/FixelDisplay-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/FixelDisplay-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/FixelDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/FixelDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/FixelDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/FixelDisplay-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
});
