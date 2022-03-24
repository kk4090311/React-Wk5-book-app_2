import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button } from "native-base";
import Starrating from "../components/Starrating"

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    rate,
    description
  } = route.params;
  return (
    
      <ScrollView bg="#fff">
          <Center>
            <Image  height="300px" width="210px" 
              source={{uri: image }}
              alt='albumImage'/>
              <Box bg="white" padding="2" margin="2">
              <Heading fontSize="4xl">{title}</Heading>
              <Center>
              <Text fontSize="14px" fontWeight="400" color="#666666">{artist}</Text>
              <Text> <Starrating value={rate}/><Text>{rate}.0</Text><Text color="#666666">/5.0</Text></Text>
              </Center>
              </Box>
            </Center>
        <Center>
          <Box bg="#fff" paddingTop="2px">
              <Text width="320px">{description}</Text>
          </Box>
            <Button  width="190px" height="36px" 
              mt="4"
              onPress={() => Linking.openURL(url)}
              bg="#6200EE"     
            >
            <Text color="#fff" >Buy Now for ${price}</Text>
          </Button>   
        </Center>
      </ScrollView>      
   
  );
}

export default DetailScreen;
