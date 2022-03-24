import React from "react";
import { Box ,  ScrollView,  Text ,} from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <ScrollView bg="#fff">
      <Box  marginLeft="20px">
        <Text fontSize="24px" fontWeight={700} paddingTop="6px" >Popular Books</Text>
        <AlbumList 
          list={albumData.albumList}
          navigation={navigation}
        />
         <Text fontSize="24px" fontWeight={700} >Newest</Text>
        <AlbumList 
          list={albumData.albumAList}
          navigation={navigation}
        />
      </Box>
    </ScrollView>
  );
};

export default AlbumScreen;
