import React from 'react';
import { Box, Heading, Button, SimpleGrid, Tooltip } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import './form.styles.css';
import '../button/button.styles.css';

import incidentReport from './incidentReport.component'
import injuryReport from './injuryReport.component'

export default function Directory() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="20rem"
    >
      <Heading className="arsTitle" fontWeight={100}>
        Select which form you wish to fill:
      </Heading>

      <Box className="formCenter">
        <SimpleGrid columns={2} display="flex">
        <Link to="/Incidentreport">
          <Button className="btnBasic" variantColor="blue">
            Incident Report
          </Button>
        </Link>
          <Link to="/InjuryReport">
          <Button className="btnBasic" variantColor="blue">
            Injury Report
          </Button>
        </Link>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
