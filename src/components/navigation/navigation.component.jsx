import React from 'react';
import { Box, Button, Tooltip } from '@chakra-ui/core';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './navigation.styles.css';
const Navigation = () => {
  return (
    <Box mt={50}>
      <Tooltip
        hasArrow
        label="Use this form to fill complete report"
        placement="bottom"
      >
        <Link to="/Form">
          <Button className="arsButton" variant="outline">
            Main Form
          </Button>
        </Link>
      </Tooltip>
      <Tooltip
        hasArrow
        label="Only medical personal shoul fill this form"
        placement="bottom"
      >
        <Button className="arsButton" variant="outline">
          Medical Form
        </Button>
      </Tooltip>
      <Tooltip
        hasArrow
        label="Add causes related to accident"
        placement="bottom"
      >
        <Button className="arsButton" variant="outline">
          Causes
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Navigation;
