import { FC, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Pressable,
  View,
  StyleSheet,
} from 'react-native';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import globalStyle from '../../assets/styles/globalStyle';
import { horizontalScale } from '../../assets/styles/scaling';
import Input from '../../components/Input/Input';
import { Routes } from '../../navigation/Routes';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginProps = {
  navigation: StackNavigationProp<any>;
};

const Login: FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title="Welcome Back" />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType="email-address"
            label="Email"
            placeholder="Enter your email..."
            onChangeText={setEmail}
          />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry
            label="Password"
            placeholder="******"
            onChangeText={setPassword}
          />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Button title="Login" onPress={() => {}} />
        </View>

        <Pressable
          style={styles.registrationButton}
          onPress={() => {
            navigation.navigate(Routes.Registration);
          }}
        >
          <Header color="#156CF7" type={3} title="Don't have an account?" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registrationButton: {
    alignItems: 'center',
  },
});

export default Login;
