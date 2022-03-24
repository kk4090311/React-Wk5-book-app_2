import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"

const Starrating =({value})=>{
  let stars=[];
  for (let x = 0; x < value; x++) {
    stars.push(
      <Box>
        <Image alt="A" style={{marginRight:4}} source={require('../images/icon_star_filled.png')} />
      </Box>
    )
  }
  for (let y = 0; y<(5-value); y++) {
    stars.push(
      <Box>
        <Image alt="B" style={{marginRight:4}} source={require('../images/icon_star_empty.png')} />
      </Box>
    )
  }
  return(<Box style={{flexDirection:"row"}}>{stars}</Box>)
};
export default Starrating;