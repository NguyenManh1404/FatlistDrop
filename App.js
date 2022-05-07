// import React from "react";
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   ScrollView,
//   Pressable,
//   Alert,
// } from "react-native";
// import { AntDesign } from "@expo/vector-icons";

// const DATA = [
//   {
//     id: "1",
//     day: "Thu 05 Nov (Total: 1h 40m)",
//     time: "02: 30pm to 04:10pm - 15m lunch",
//     jobname: "835-853 Hight St, Armadale OH - Overheads",
//     leavetype: "N/A",
//     timeallow: "N/A",
//     laha: "N/A",
//     detail:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
//     payroll: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
//   },
//   {
//     id: "2",
//     day: "Fri 06 Nov (Total: 1h 40m)",
//     time: "02: 30pm to 04:10pm - 15m lunch",
//     jobname: "835-853 Hight St, Armadale OH - Overheads",
//     leavetype: "N/A",
//     timeallow: "N/A",
//     laha: "N/A",
//     detail:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
//     payroll: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
//   },
//   {
//     id: "3",
//     day: "Fri 07 Nov (Total: 1h 40m)",
//     time: "01: 30pm to 04:10pm - 15m lunch",
//     jobname: "835-853 Hight St, Armadale OH - Overheads",
//     leavetype: "N/A",
//     timeallow: "N/A",
//     laha: "N/A",
//     detail:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
//     payroll: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
//   },
// ];

// const Day = ({ day }) => {
//   return (
//     <View>
//       <Text style={styles.day}>{day}</Text>
//     </View>
//   );
// };

// const Time = ({ time }) => {
//   return (
//     <View style={styles.viewTime}>
//       <Text style={styles.time}>{time}</Text>
//     </View>
//   );
// };

// const JobName = ({ jobname }) => {
//   return (
//     <View>
//       <Text style={styles.jobname}>{jobname}</Text>
//     </View>
//   );
// };

// const LeaveType = ({ leavetype }) => {
//   return (
//     <View>
//       <Text style={styles.leavetype}>{leavetype}</Text>
//     </View>
//   );
// };

// const TimeAllow = ({ timeallow }) => {
//   return (
//     <View>
//       <Text style={styles.timeallow}>{timeallow}</Text>
//     </View>
//   );
// };

// const Laha = ({ laha }) => {
//   return (
//     <View>
//       <Text style={styles.laha}>{laha}</Text>
//     </View>
//   );
// };

// const Detail = ({ detail }) => {
//   return (
//     <View>
//       <Text style={styles.detail}>{detail}</Text>
//     </View>
//   );
// };

// const PayRoll = ({ payroll }) => {
//   return (
//     <View>
//       <Text style={styles.payroll}>{payroll}</Text>
//     </View>
//   );
// };

// const App = () => {
//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <View style={styles.titledetail}>
//         <View style={styles.dayandhouse}>
//           <View style={styles.dayandhousedetail}>
//             <Day day={item.day}></Day>
//             <Time time={item.time}></Time>
//           </View>
//           <AntDesign
//             style={styles.caretdown}
//             name="caretdown"
//             size={15}
//             color="black"
//           />
//         </View>
//       </View>
//       <View
//         style={{
//           borderBottomColor: "#696976",
//           borderBottomWidth: 1,
//         }}
//       />

//       <View style={styles.bodydetail}>
//         <Text style={styles.jobnametitle}>Job Name:</Text>
//         <JobName jobname={item.jobname}></JobName>

//         <View style={styles.viewna}>
//           <View style={styles.viewnaitem}>
//             <View style={styles.viewnaitemdetail}>
//               <Text style={styles.jobnametitle}>Leave Type</Text>
//               <LeaveType leavetype={item.leavetype}></LeaveType>
//             </View>
//           </View>
//           <View style={styles.viewnaitem}>
//             <View style={styles.viewnaitemdetail}>
//               <Text style={styles.jobnametitle}>Time Allowance</Text>
//               <TimeAllow timeallow={item.timeallow}></TimeAllow>
//             </View>
//           </View>
//           <View style={styles.viewnaitem}>
//             <View style={styles.viewnaitemdetail}>
//               <Text style={styles.jobnametitle}>LAHA</Text>
//               <Laha laha={item.laha}></Laha>
//             </View>
//           </View>
//         </View>
//         <Text style={styles.jobnametitle}>Description:</Text>
//         <Detail detail={item.detail}></Detail>
//         <Text style={styles.jobnametitle}>Payroll Notes:</Text>
//         <PayRoll payroll={item.payroll}></PayRoll>

//         <View style={styles.button}>
//           <Pressable style={styles.redbutton} onPress={() => Alert.alert('Edit')}>
//             <Text style={styles.textredbutton}>Edit</Text>
//           </Pressable>
//           <Pressable style={styles.blackbutton} onPress={() => Alert.alert('Delete')}>
//             <Text style={styles.textblackbutton}>Delete</Text>
//           </Pressable>
//         </View>
//       </View>

      
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <View>
//         <Text style={styles.fastlist}>FlatList And ScrollView</Text>
//       </View>

//       <View style={styles.viewtoday}>
//         <AntDesign
//           style={styles.nexticon}
//           name="leftcircle"
//           size={20}
//           color="red"
//         />
//         <View style={styles.viewtodaydetail}>
//           <Text style={styles.today}>Mon 02 Nov - Sun 08 Nov 2020</Text>
//           <Text style={styles.todayhourse}>(3h 20m)</Text>
//         </View>

//         <AntDesign
//           style={styles.nexticon}
//           name="rightcircle"
//           size={20}
//           color="red"
//         />
//       </View>

//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     marginLeft: "5%",
//     marginRight: "5%",
//   },
//   fastlist: {
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 20,
//     marginBottom: "10%",
//   },
//   viewtoday: {
//     flexDirection: "row",
//   },
//   nexticon: {
//     height: 20,
//     flex: 1,
//   },
//   viewtodaydetail: {
//     flex: 11,
//   },
//   today: {
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   todayhourse: {
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#696976",
//   },
//   dayandhouse: {
//     flexDirection: "row",
//   },
//   dayandhousedetail: {
//     flexDirection: "column",
//   },
//   caretdown: {
//     marginLeft: 120,
//     marginTop: 10,
//   },
//   item: {
//     borderWidth: 1,
//     borderColor: "#696976",
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   day: {
//     fontWeight: "bold",
//   },
//   jobname: {
//     fontWeight: "bold",
//   },
//   jobnametitle: {
//     color: "#696976",
//   },
//   viewna: {
//     flexDirection: "row",
//   },
//   viewnaitemdetail:{
//    marginRight:70
//   },
//   button:{
//     flexDirection:"row",
//     marginBottom:10,
//     marginTop:10,
//   },
//   redbutton: {
//     borderRadius: 7,
//     height: 50,
//     width:150,
//     backgroundColor: '#e00000',
//     marginLeft:15
//   },
//   blackbutton:{
//     borderRadius: 7,
//     height: 50,
//     width:150,
//     borderWidth:1,
//     borderColor: "#696976",
//     marginLeft:15
//   },
//   textredbutton:{
//     textAlign:"center",
//     fontWeight:"bold",
//     color:'white',
//     marginTop:15,
   
//   },
//   textblackbutton:{
//     textAlign:"center",
//     fontWeight:"bold",
//     marginTop:15
//   }
// });

// export default App;











import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
 import Icon from 'react-native-vector-icons/FontAwesome';

export default function ScollViewExample() {
  const DATA = [
    {
      id: 1,
    
      date: "Thu 05 Nov (Total: 1h 40m)",
      time: "02:15pm to 04:10pm - 15m lunch",
      jobName: "835-853 High St, Armadale OH - Overheads",
      leaveType: "N/A",
      timeAllowance: "N/A",
      laha: "N/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
      payrollNote: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      id: 2,
      
      date: "Fri 06 Nov (Total: 2h 10m)",
      time: "02: 30pm to 04:10pm - 15m lunch",
      jobName: "835-853 High St, Armadale (11466) OH - Overheads",
      leaveType: "N/A",
      timeAllowance: "N/A",
      laha: "N/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
      payrollNote: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      id: 3,
     
      date: "Fri 06 Nov (Total: 2h 10m)",
      time: "02: 30pm to 04:10pm - 15m lunch",
      jobName: "835-853 High St, Armadale (11466) OH - Overheads",
      leaveType: "N/A",
      timeAllowance: "N/A",
      laha: "N/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, elementum augue velit orci risus cras. Pretium tortor condimentum.",
      payrollNote: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
  ];

  const [data, setData] = useState(DATA);

  const onRowPress = (item) => {
    data[data.indexOf(item)] = { ...item, isSelected: !item.isSelected };
    setData([...data]);

    console.log("kk",data);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.nameScreen}>FlatList And ScrollView</Text>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
       
        {data.map((item, index) => (
          <View key={index} style={styles.item}>
            <TouchableOpacity
              onPress={() => onRowPress(item)}
              style={[
                styles.itemRow,
                {
                  borderBottomColor: "#E8E8EB",
                  borderBottomWidth: 1,
                  paddingHorizontal: 16,
                },
              ]}
            >
              <View>
                <Text style={styles.itemDate}>{item.date}</Text>
                <Text style={styles.itemTime}>{item.time}</Text>
              </View>
              {item.isSelected ? (
            
                 <Icon name="chevron-down"  size={20} color="black" />
              ) : (
                <Icon name="chevron-up"  size={20} color="black" />
              )}
            </TouchableOpacity>
            <View style={{ paddingHorizontal: 16 }}>
              <Text style={styles.itemTitle}>Job Name:</Text>
              <Text style={styles.itemContent}>{item.jobName}</Text>
              {item.isSelected ? (
                <View>
                  <View style={styles.itemRow}>
                    <View>
                      <Text style={styles.itemTitle}>Leave Type:</Text>
                      <Text style={styles.itemContent}>{item.leaveType}</Text>
                    </View>
                    <View>
                      <Text style={styles.itemTitle}>Time Allowance:</Text>
                      <Text style={styles.itemContent}>
                        {item.timeAllowance}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.itemTitle}>LAHA:</Text>
                      <Text style={styles.itemContent}>{item.laha}</Text>
                    </View>
                  </View>
                  <Text style={styles.itemTitle}>Description:</Text>
                  <Text style={styles.itemContent}>{item.description}</Text>
                  <Text style={styles.itemTitle}>Payroll Notes:</Text>
                  <Text style={styles.itemContent}>{item.payrollNote}</Text>
                  <View style={[styles.itemRow, { marginTop: 18 }]}>
                   
                  </View>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
  },
  nameScreen: {
    width: "100%",
    height: 100,
    color: "#141434",
    paddingBottom: 24,

    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",

    textAlign: "center",
    textAlignVertical: "bottom",

    borderBottomWidth: 0.8,
    borderBottomColor: "#E8E8EB",
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    marginBottom: 8,
  },
  headerIcon: {
    marginTop: 3,
    fontSize: 18,
    color: "#D00C04",
  },
  headerDate: {
    fontWeight: "600",
    color: "#141434",
  },
  headerTime: {
    color: "#838393",
    textAlign: "center",
  },
  item: {
    marginTop: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E8E8EB",
    paddingTop: 16,
    paddingBottom: 6,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemDate: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    color: "#141434",
  },
  itemTime: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    color: "#414151",
    marginTop: 3,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    color: "#838393",
    marginTop: 12,
  },
  itemContent: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: "#141434",
    marginTop: 4,
  },
  itemButton: {
    width: 120,
    height: 40,
    borderRadius: 6,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
