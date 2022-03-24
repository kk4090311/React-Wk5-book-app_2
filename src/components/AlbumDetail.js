import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"
import  Starrating from "./Starrating";



const AlbumDetail = ({ album, navigation }) => {
  return (
    <Box marginRight="16px"  width="140px" height="256px" >
      <Box bg="#fff">
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
            <Image
              source={{ uri: album.image }}
              alt="album"
              width="140px"
              height="200px"
            />            
        </Pressable>
      </Box>   
      <HStack bg='#fff' >
        <VStack justifyContent="space-around">
          <Starrating value={album.rate}/>
          <Text fontSize="14px" fontWeight="700">{album.title}</Text>
          <Text color="#666666"  fontSize="12px">{album.artist}</Text>
        </VStack>
      </HStack>
    </Box>
    
  )};

export default AlbumDetail;
