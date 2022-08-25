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
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Text,
  } from '@chakra-ui/react'
  function LoginForm({text , buttonStyles}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(useDisclosure())
    return (
      <>
        <Button style={buttonStyles} onClick={onOpen}>{text}</Button>
        <Modal isOpen={isOpen} onClose={onClose}  >
          <ModalOverlay />
          <ModalContent border='1px' borderColor='blackAlpha.900' padding='20px 0'  >
            <ModalHeader ml='20px' mr='20px' > 
                <Image src='https://www.kindmeal.my/images/logo-kindmeal.png'      />
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <FormControl style={{ 
                        display:"Flex" ,
                        flexDirection:'column',
                        justifyContent:'space-evenly' ,
                        alignItems:'center' ,
                        gap:'20px'
                        }} >
                    <Text fontSize='2vw' color='#666666' >Member Login</Text>
                    <Input type='email' fontSize='1.5vw' placeholder='Your Email' w='80%'  />
                    <Input type='password' fontSize='1.5vw' placeholder='Your Password' w='80%'  />
                    <Input bg='#2BB673' fontSize='1.75vw' color='#fff' w='60%' type='submit' placeholder='Login' />
                </FormControl>
              </Box>
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
export default LoginForm;