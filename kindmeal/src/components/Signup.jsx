import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
    Text
  } from '@chakra-ui/react'
  function SignUpForm({text , textStyle}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Text as='button' style={textStyle} onClick={onOpen}>{text}</Text>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <Image src='https://www.kindmeal.my/images/logo-kindmeal.png'      />
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>LIFE IS AWESOME........</div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default SignUpForm;