import React from 'react';
import {Box} from '@mui/material';
import {useThemeContext} from '../../../../utility/AppContextProvider/ThemeContextProvider';
import {alpha} from '@mui/material/styles';
// @ts-ignore
import Logo from '../../../../../assets/icon/logo.svg';
// @ts-ignore
import LogoText from '../../../../../assets/icon/logo_text.svg';

interface AppLogoProps {
  color?: string;
}

const AppLogo: React.FC<AppLogoProps> = () => {
  const {theme} = useThemeContext();

  return (
    <Box
      sx={{
        height: {xs: 56, sm: 70},
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          height: {xs: 40, sm: 45},
        },
      }}
      className='app-logo'
    >
      {/* <Logo fill={theme.palette.primary.main} /> */}
      <Box
        component="img"
        sx={{
          maxHeight: { xs: 51, md: 65 },
          
        }}
        alt="Griver"
        src="/assets/images/griver-icono.png"
      />
      <Box
        sx={{
          mt: 1,
          display: {xs: 'none', md: 'block'},
          '& svg': {
            height: {xs: 25, sm: 30},
          },
        }}
      >
        {/* <LogoText fill={alpha(theme.palette.text.primary, 0.8)} /> */}
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 51, md: 65 },
            
          }}
          alt="Griver"
          src="/assets/images/griver-label.png"
        />
      </Box>
    </Box>
  );
};

export default AppLogo;
