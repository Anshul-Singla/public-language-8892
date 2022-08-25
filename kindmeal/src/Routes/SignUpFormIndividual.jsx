import { Box, Center, Flex, Heading, Link, Text,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Spacer,
    Grid,
    SimpleGrid,
    Select, } from "@chakra-ui/react";

function SignUpFormIndividual(){
    return (
       
        <Box w='60%' border='1px dashed teal' margin='0 auto' p='5' >
            <Flex flexDirection='column' textAlign='left' gap='3' >
                <Heading fontSize='2vw' fontWeight='400' >Food Lover? Sign Up Now or <Link color='blue.500' >Login With Facebook</Link> </Heading>
                <Text color='blackAlpha.900' fontWeight='500' >Discover tasty meat-free meals and dine instantly — no coupon payment, booking or printing is required.</Text>
                <Text color='blackAlpha.900' fontWeight='500' >KindMeal is a fun, exciting and cool new way for you to show your compassion towards animals. We collaborate with kind restaurants and cafes across the nation to bring you delicious meat-free foods that will not only help save precious animal lives, but improve your health and save your money at the same time!</Text>
            </Flex>
            <FormControl w='80%' >
                <Flex border='1px solid red' justifyContent='space-between' mt='5' >
                    <Text alignSelf='center' textAlign='left' w='20%'  >Your Name</Text>    
                    <Flex w='80%' gap='5' >
                        <Box w='40%' >
                            <FormLabel color='#666666' >First name</FormLabel>
                            <Input type='text' borderColor='gray.500'   />
                        </Box>
                        <Box w='40%' >
                            <FormLabel color='#666666' >Last name</FormLabel>
                            <Input type='text' borderColor='gray.500'  />
                        </Box>
                    </Flex>
                </Flex>
                <Flex border='1px solid red' justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Email</Text>
                    <Box w='80%'>
                        <FormLabel color='#666666' >Your email must be correct to receive activation email</FormLabel>
                        <Input type='email' borderColor='gray.500'  />
                    </Box>
                </Flex>
                <Flex border='1px solid red' justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Re-Enter Email:</Text>
                    <Box w='80%'>
                        <Input type='email' borderColor='gray.500'  />
                    </Box>
                </Flex>
                <Flex border='1px solid red' justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Password</Text>
                    <Box w='80%'>
                        <Input type='password' borderColor='gray.500'  />
                    </Box>
                </Flex>
                <Flex border='1px solid red' justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Username</Text>
                    <Box w='80%'>
                        <FormLabel color='#666666' mb='0' >Choose a cool username for your Personal Profil Page ,comment & reviews</FormLabel>
                        <FormLabel color='blue.400' mb='0' > http://KindMeal.my/Username </FormLabel>
                        <Input type='email' borderColor='gray.500'  />
                    </Box>
                </Flex>
                <Flex border='1px solid red' justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Birth Date</Text>
                    <Box w='80%'>
                        <FormLabel color='#666666' mb='0' >Only your will be publicly visible</FormLabel>
                        <Flex>
                            <Select placeholder='Month'  >
                                <option value='option1'>Jan</option>
                                <option value='option2'>Feb</option>
                                <option value='option3'>Mar</option>
                                <option value='option1'>Apr</option>
                                <option value='option2'>May</option>
                                <option value='option3'>Jun</option>
                                <option value='option1'>Jul</option>
                                <option value='option2'>Aug</option>
                                <option value='option3'>Sep</option>
                                <option value='option1'>Oct</option>
                                <option value='option2'>Nov</option>
                                <option value='option3'>Dec</option>
                            </Select>
                            <Select placeholder='Day'  >
                                <option value='option1'>1</option>
                                <option value='option2'>2</option>
                                <option value='option3'>3</option>
                                <option value='option1'>4</option>
                                <option value='option2'>5</option>
                                <option value='option3'>6</option>
                                <option value='option1'>7</option>
                                <option value='option2'>8</option>
                                <option value='option3'>9</option>
                                <option value='option1'>10</option>
                                <option value='option2'>11</option>
                                <option value='option3'>12</option> 
                                <option value='option1'>13</option>
                                <option value='option2'>14</option>
                                <option value='option3'>15</option>
                                <option value='option1'>16</option>
                                <option value='option2'>17</option>
                                <option value='option3'>18</option>
                                <option value='option1'>19</option>
                                <option value='option2'>20</option>
                                <option value='option3'>21</option>
                                <option value='option1'>22</option>
                                <option value='option2'>23</option>
                                <option value='option3'>24</option>
                                <option value='option3'>25</option>
                                <option value='option1'>26</option>
                                <option value='option2'>27</option>
                                <option value='option3'>28</option>
                                <option value='option1'>29</option>
                                <option value='option2'>30</option>
                                <option value='option3'>31</option>
                            </Select>
                            <Select placeholder='Year'  >
                                <option value='option1'>1975</option>
                                <option value='option2'>1976</option>
                                <option value='option3'>1977</option>
                                <option value='option1'>1978</option>
                                <option value='option2'>1979</option>
                                <option value='option3'>1980</option>
                                <option value='option1'>1981</option>
                                <option value='option2'>1982</option>
                                <option value='option3'>1983</option>
                                <option value='option1'>1984</option>
                                <option value='option2'>1985</option>
                                <option value='option3'>1986</option> 
                                <option value='option1'>1987</option>
                                <option value='option2'>1988</option>
                                <option value='option3'>1989</option>
                                <option value='option1'>1990</option>
                                <option value='option2'>1991</option>
                                <option value='option3'>1992</option>
                                <option value='option1'>1993</option>
                                <option value='option2'>1994</option>
                                <option value='option3'>1995</option>
                                <option value='option1'>1996</option>
                                <option value='option2'>1997</option>
                                <option value='option3'>1998</option>
                                <option value='option3'>1999</option>
                                <option value='option1'>2001</option>
                                <option value='option2'>2002</option>
                                <option value='option3'>2003</option>
                                <option value='option1'>2004</option>
                                <option value='option2'>2005</option>
                                <option value='option3'>2006</option>
                            </Select>
                        </Flex>
                    </Box>
                </Flex>
                <Flex border='1px solid red' justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Country</Text>
                    <Box w='80%'>
                    <Select placeholder='India'  >
                                <option value='option1'>Malaysia</option>
                                <option value='option2'>Afghanistan</option>
                                <option value='option3'>Albania</option>
                                <option value='option1'>Algeria</option>
                                <option value='option2'>American Samoa</option>
                                <option value='option3'>Angola</option>
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                                <option value='option1'></option>
                                <option value='option2'></option>
                                <option value='option3'></option>
                            </Select>
                    </Box>
                </Flex>
            </FormControl>
        </Box>
        
    )
}
export default SignUpFormIndividual;