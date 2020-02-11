import React from 'react';
import './header.styles.css'
import virginLogo from './virginLogo.svg';
import { Box, Image, Text,} from '@chakra-ui/core';
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <Box className="header">
    <Link to='/'>
    <Image
        src={virginLogo}
        alt="Virgin Voyages Logo"
        size="100px"
        objectFit="cover"
      />
    </Link>
      <Text className="logoText">Voyages</Text>
    </Box>
  );
}