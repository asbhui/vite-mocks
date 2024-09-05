import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as langObject from './en';
import textRes from './localePlaceholder';
import { DateTime } from 'luxon';
import HttpBackend from 'i18next-http-backend';

const resources = {
  en: { ...langObject },
};

i18next
  .use(HttpBackend)

  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    lng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
      format: (value: string, format) => {
        const dateFormat: Record<string, string> = textRes.en.core.dateFormat;

        if (format) {
          if (['pricePence', 'pricePound'].includes(format)) {
            let prepValue: number = parseFloat(value);
            if (format === 'pricePence') {
              prepValue /= 100;
            }
            return new Intl.NumberFormat('en-GB', { currency: 'GBP', style: 'currency' }).format(prepValue);
          }
          if (dateFormat[format]) {
            const checkDate = DateTime.fromISO(value);
            if (checkDate.isValid) return checkDate.toFormat(dateFormat[format]);
          }
        }
        return value;
      },
    },
    resources,
  })
  .catch((error) => {
    throw error;
  });

export default i18next;
