import { Box,Flex,Text,FormControl,FormLabel,Input,Select,Radio, RadioGroup, Stack,  Image,   UnorderedList,ListItem, Button  } from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";

function SignUpForm(){

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const currentYear = (new Date()).getFullYear();
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    const years = range(currentYear, currentYear - 50, -1); 
    const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    const states = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"]
    const { userData , handleChange ,handleSubmit } = useContext(AppContext);
    return (
            <FormControl w='80%' >
                <Flex  justifyContent='space-between' mt='5' >
                    <Text alignSelf='center' textAlign='left' w='20%'  >Your Name</Text>    
                    <Flex w='80%' gap='5' >
                        <Box w='40%' >
                            <FormLabel color='#666666' >First name</FormLabel>
                            <Input type='text' borderColor='gray.500' value={userData.first_name}  name="first_name" onChange={handleChange}   />
                        </Box>
                        <Box w='40%' >
                            <FormLabel color='#666666' >Last name</FormLabel>
                            <Input type='text' borderColor='gray.500' value={userData.last_name}  name="last_name" onChange={handleChange}  />
                        </Box>
                    </Flex>
                </Flex>
                <Flex  justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Email</Text>
                    <Box w='80%'>
                        <FormLabel color='#666666' >Your email must be correct to receive activation email</FormLabel>
                        <Input type='email' borderColor='gray.500' value={userData.email}  name="email" onChange={handleChange} />
                    </Box>
                </Flex>
                <Flex  justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Re-Enter Email:</Text>
                    <Box w='80%'>
                        <Input type='email' borderColor='gray.500'  />
                    </Box>
                </Flex>
                <Flex  justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Password</Text>
                    <Box w='80%'>
                        <Input type='password' borderColor='gray.500'  />
                    </Box>
                </Flex>
                <Flex  justifyContent='space-between' mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Username</Text>
                    <Box w='80%'>
                        <FormLabel color='#666666' mb='0' >Choose a cool username for your Personal Profil Page ,comment & reviews</FormLabel>
                        <FormLabel color='blue.400' mb='0' > http://KindMeal.my/Username </FormLabel>
                        <Input type='email' borderColor='gray.500' value={userData.username}  name="username" onChange={handleChange} />
                    </Box>
                </Flex>
                <Flex   mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Birth Date</Text>
                    <Box w='60%'>
                        <FormLabel color='#666666' mb='0' >Only your will be publicly visible</FormLabel>
                        <Flex gap='5' >
                            <Select placeholder='Month'   borderColor='gray.500'  >
                                {
                                    months.map((month , i)=>(
                                        <option  value={`option${i+1}`} > {month} </option>
                                    ))
                                }
                            </Select>
                            <Select placeholder='Day' borderColor='gray.500'  >
                                {
                                    dates.map((date , i)=>(
                                        <option  value={`option${i+1}`} > {date} </option>
                                    ))
                                }
                            </Select>
                            <Select placeholder='Year' borderColor='gray.500' >
                            {
                                    years.map((year , i)=>(
                                        <option  value={`option${i+1}`} > {year} </option>
                                    ))
                                }
                            </Select>
                        </Flex>
                    </Box>
                </Flex>
                <Flex  mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Country</Text>
                    <Box w='30%'>
                        <Select placeholder='India' borderColor='gray.500' value={userData.country}  name="country" onChange={handleChange} >
                                {
                                    country_list.map((country , i)=>(
                                        <option  value={country} > {country} </option>
                                    ))
                                }
                                
                        </Select>
                    </Box>
                </Flex>
                <Flex  mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >State</Text>
                    <Box w='30%'>
                        <Select placeholder='Select State' borderColor='gray.500' >
                                {
                                    states.map((state , i)=>(
                                        <option  value={`option${i+1}`} > {state} </option>
                                    ))
                                }
                                
                        </Select>
                    </Box>
                </Flex>
                <Flex  mt='5'  >
                    <Text alignSelf='center' textAlign='left' w='20%' >Gender</Text>
                    <Box w='30%'>
                        <RadioGroup  >
                            {/* <Stack direction='row'> */}
                            <Stack >
                                <Radio borderColor='gray.500'    value='M'  name="gender" onChange={ handleChange }>Male</Radio>
                                <Radio  borderColor='gray.500' value='F'  name="gender" onChange={ handleChange } >Female</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Flex>
                <Button onClick={ (e)=>{ handleSubmit(e)}} disabled={userData.gender==''|| userData.country==''|| userData.username==''|| userData.email==''|| userData.last_name=='' || userData.first_name==''  }  type='submit' h='60px' w='30%' pl='6' pr='6' m='5' bg='red.500' color='#fff' fontWeight='600' fontSize='1.5vw'  >Join Now</Button>
                {/* <Button > join now</Button> */}
            </FormControl>
        
    )
}
 
function SignUpBodyCard({props , dispatchFunction}){

            if(props.type == 'list'){
                return (
                    <Box  textAlign='left'p='2' border='2px solid gray' rounded={15} m={5}  w='18vw' h='fit-content' >
                        <Text color='#666666' fontWeight='400' fontSize='2vw'p={3} > {props.heading} </Text>
                        <UnorderedList>
                            {
                            props.list.map(el => <ListItem fontSize='1.2vw' color="#666666" > {el} </ListItem>)
                            }
                        </UnorderedList>
                        
                    </Box>
                )
            }else{
                return (
                <Flex onClick={dispatchFunction} as='button' w='18vw' h='fit-content' rounded={15} m={5}  flexDirection='column' justifyContent='center' alignItems='center' gap='5' border='2px solid gray' >
                    <Image src={props.src}   />
                    <Text> {props.text} </Text>
                </Flex>
            )
            }
    
}
export {SignUpForm , SignUpBodyCard} ;
// export default   ;