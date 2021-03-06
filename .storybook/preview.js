export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {excludeDecorators: true},
  },
};

// Generate required css for vector-icons
import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import materialiconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
const iconFontStyles = `
@font-face {
  src: url(${iconFont});
  font-family: MaterialCommunityIcons;
}
@font-face {
  src: url(${materialiconFont});
  font-family: MaterialIcons;
}
`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
