import React, { useState, useEffect} from 'react';
import styles from "./style"
import { SafearewView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import database from '../../config/firebaseconfig';

export default function Task() {

  const [task, setTask] = useState([])

  useEffect(()=> {
    database.collection("Tasks").onSnapshot((query) => {
      const list = []
      query.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id })
      })
      setTask(list)
    })
  }, [])

 return (
   <View>
       <Text>page de Task</Text>
   </View>
  );
}