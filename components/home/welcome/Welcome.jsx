import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { SIZES, icons, images } from '../../../constants'
import { useRouter } from 'expo-router'

const jobTypes = ['Full-Time','Part-time','Contractor']
const Welcome = () => {
  const router = useRouter()
  const [activeJobType,setActiveJobType] = useState('Full-Time')
  return (
    <View>
      <View>
        <Text style={styles.userName}>Hello, Zeeshan</Text>
        <Text style={styles.welcomeMessage}>Find Your Best Job.</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput} 
            value=''
            onChange={()=>{}}
            placeholder='what are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity 
              style={styles.tab(activeJobType,item)} 
              onPress={()=>{
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome