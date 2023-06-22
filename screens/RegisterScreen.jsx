import React, { useContext, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password_confirmation, setConfirm] = useState(null);

  const { isLoading, register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          value={password_confirmation}
          placeholder="Confirm password"
          onChangeText={(text) => setConfirm(text)}
          secureTextEntry
        />

        <Button
          title="Register"
          onPress={() => {
            register(name, email, password, password_confirmation, navigation);
          }}
        />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
});

export default RegisterScreen;
