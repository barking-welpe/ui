enum Locale {
  Spain = 'es',
  Germany = 'de',
  France = 'fr',
  South_Korea = 'kr',
  China = 'zh',
  USA = 'en',
}

export const getCaptionForLocale = (locale: Locale) => {
  switch (locale) {
    case Locale.Spain:
      return 'Hola!';
    case Locale.Germany:
      return 'Hallo!';
    case Locale.France:
      return 'Bonjour!';
    case Locale.South_Korea:
      return '안녕하세요!';
    case Locale.China:
      return '你好!';
    default:
      return 'Hello!';
  }
};

const items = [
  { value: Locale.USA, right: '🇺🇸', title: 'English' },
  { value: Locale.France, right: '🇫🇷', title: 'Français' },
  { value: Locale.Spain, right: '🇪🇸', title: 'Español' },
  { value: Locale.China, right: '🇨🇳', title: '中文' },
  { value: Locale.South_Korea, right: '🇰🇷', title: '한국어' },
];

export default {
  name: 'Locale',
  description: 'Internationalization locale',
  defaultValue: Locale.USA,
  toolbar: {
    icon: 'globe',
    items,
  },
};
