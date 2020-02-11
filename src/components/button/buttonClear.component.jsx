import React from 'react'

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
  } from "@chakra-ui/core";

import './button.styles.css'

function ButtonClear() {
    const [isOpen, setIsOpen] = React.useState();
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef();
  
    return (
      <>
        <Button className="btnBasic" variantColor="red" onClick={() => setIsOpen(true)}>
          Clear Form
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Clear Form
            </AlertDialogHeader>
  
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
  
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button variantColor="red" onClick={onClose} ml={3}>
                Clear
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }

  export default ButtonClear;