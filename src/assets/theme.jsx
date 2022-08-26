import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
    palette: {
      'light-gray': {
        main: '#545D69',
      },
      purple: {
        main: '#1C0C3F',
      },
      "light-purple": {
        main: '#5000ff'
      },
      white: {
        main: '#ffffff'
      }
    },
    searchField: {
      color: 'white'
    }
});

export default theme 