import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Button,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function App() {
  const { height } = useWindowDimensions();
  const UserImage =
    "https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4=";
  return (
    <View style={[styles.container, { height }]}>
      <View style={styles.navbar}>
        <View style={styles.lefthalf}>
          <Image
            style={styles.logoimage1}
            source={
              "https://img.freepik.com/free-vector/heart-shaped-hospital-logo-template_1057-391.jpg?w=2000"
            }
          />
          <Text style={styles.text}>Prakesh Sharam </Text>
        </View>
        <View style={styles.righthalf}>
          <Image
            style={styles.logoimage2}
            source={
              "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
            }
          />
          <Text style={styles.text}>Prakesh Sharam </Text>
        </View>
      </View>
      <View style={styles.sub}>
        <View style={styles.leftsidecontainer}>
          <View style={styles.leftupper}>
            <Icon name="home" size={30} color="black" />
            <Icon name="bars" size={30} color="black" />
            <Icon name="calendar" size={30} color="black" />
            <Icon name="wechat" size={30} color="black" />
          </View>
          <View style={styles.leftlower}>
            <Icon name="home" size={30} color="black" />
            <Icon name="home" size={30} color="black" />
          </View>
        </View>

        <View style={styles.rightsidecontainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}
          >
            <View style={styles.biocontainer}>
              <View style={styles.subbiocontainer}>
                <Image source={UserImage} style={styles.circularImage} />
                <View style={styles.general}>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                </View>
                <View style={styles.general}>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                </View>
                <View style={styles.general}>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                </View>
                <View style={styles.general}>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                </View>
                <View style={styles.general}>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                </View>
                <View style={styles.general}>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                  <View style={styles.generalinfo}>
                    <Text>Gender</Text>
                    <Text>Male</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.maincontainer}>
            {/* Create a 3x4 grid */}
            <View style={styles.toggercontainer}>
              <Text>history</Text>
              <Text>note</Text>
              <Text>Records</Text>

              <Button
                title="Add Medicines"
                onPress={() => console.log("Button 1 pressed")}
              />
              <Button
                title=" Add test"
                onPress={() => console.log("Button 2 pressed")}
              />
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridColumn}>BLOOD test</View>
              <View style={styles.gridColumn}>MRI</View>
              <View style={styles.gridColumn}>HOSPITALIZTION </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridColumn}>VACCINATION</View>
              <View style={styles.gridColumn}>BLOOD test</View>
              <View style={styles.gridColumn}>MRI</View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridColumn}>BLOOD test</View>
              <View style={styles.gridColumn}>MRI</View>
              <View style={styles.gridColumn}>HOSPITALIZTION </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    color: "black",
    whiteSpace: "nowrap",
  },
  navbar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  logoimage1: {
    width: "10%",
    marginRight: 20,
  },
  logoimage2: {
    marginRight: 20,
    width: "10%",
    borderRadius: 50,
  },
  lefthalf: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  righthalf: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: "20px",
  },

  sub: {
    flex: 1,
    flexDirection: "row",
  },
  leftsidecontainer: {
    width: "6%",
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  leftupper: {
    height: "70%",
    justifyContent: "space-evenly",
  },
  leftlower: {
    height: "30%",
    justifyContent: "space-evenly",
  },
  rightsidecontainer: {
    backgroundColor: "black",
    flexDirection: "row",
    flex: 1,
    borderRadius: 10,
    width: "100%",
  },

  biocontainer: {
    width: "100%",
    height: 900,
    backgroundColor: "yellow",
    borderRadius: 10,
  },
  toggercontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subbiocontainer: {
    flexDirection: "column",
  },
  circularImage: {
    marginTop: 10,
    width: 200,
    height: 200,
    borderRadius: 100,
    marginLeft: 40,
  },
  general: {
    marginTop: 10,
    backgroundColor: "pink",
  },
  generalinfo: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  maincontainer: {
    backgroundColor: "green",
    width: "75%",
    borderRadius: 10,
    flexDirection: "column",
    overflow: "scroll",
  },
  gridRow: {
    paddingTop: "20px",
    flexDirection: "row",
    marginLeft: "10px",
    marginRight: "15px",
    marginBottom: "20px",
    borderRadius: 20,
  },
  gridColumn: {
    flex: 1,
    height: 250,
    marginLeft: "20px",
    backgroundColor: "red",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
    paddingTop: "20px",
  },
});
