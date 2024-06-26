import facebook from '@/assets/facebook_logo.png';
import google from '@/assets/google_logo.png';
import starDefault from '@/assets/star-default.png';
import star from '@/assets/star.png';
export const facebookLogo = facebook;
export const googleLogo = google;
export const iconStart = star;
export const iconStartDefault = starDefault;

export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat('de-DE').format(currency);
};

export const formatNumberToSocialStyle = (value: number) => {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase();
};
