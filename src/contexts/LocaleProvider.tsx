import { I18nextProvider } from 'react-i18next';
import i18nLoader from '../services/locales';

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => (
  <I18nextProvider i18n={i18nLoader}>{children}</I18nextProvider>
);
