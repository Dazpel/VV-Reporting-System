import React from 'react';
import {
  Button,
  useToast,
} from '@chakra-ui/core';

import './button.styles.css'

function ButtonSuccess() {
    const toast = useToast();
    return (
      <Button
        className="btnBasic"
        variantColor="green"
        type="submit"
        onClick={() =>
          toast({
            title: "Saved!",
            description: "Injury report has been saved successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
            
          })
        }
      >
        Save for later
      </Button>
    );
  }

  export default ButtonSuccess;