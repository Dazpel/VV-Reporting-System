import React from 'react';
import './home.styles.css';
import { Box, Heading, Button, SimpleGrid, Tooltip } from '@chakra-ui/core';

import { Link } from 'react-router-dom';
import '../button/button.styles.css';

export default function Home() {
  return (
   

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="20rem"
      >
        <Heading className="arsTitle" fontWeight={100}>
          Accident Report System
        </Heading>
        <Box className="homeCenter">
          <SimpleGrid columns={2} display="flex">
            <Tooltip
              hasArrow
              label="This option saves data locally in the browser"
              placement="bottom"
            >
              <Link to="/Form">
                <Button className="btnBasic" variantColor="red" fontSize="14px">
                  Offline Submission
                </Button>
              </Link>
            </Tooltip>

            <Tooltip
              hasArrow
              label="This option saves data on the cloud, use this option if external connection available. RECOMMENDED"
              placement="bottom"
            >
              <Link to="/Form">
                <Button
                  className="btnBasic"
                  variantColor="blue"
                  fontSize="14px"
                >
                  Online Submission
                </Button>
              </Link>
            </Tooltip>
          </SimpleGrid>
        </Box>
      </Box>

  );
}
