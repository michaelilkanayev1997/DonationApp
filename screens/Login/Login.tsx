import { FC, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Pressable,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import globalStyle from '../../assets/styles/globalStyle';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import Input from '../../components/Input/Input';
import { Routes } from '../../navigation/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { loginUser } from '../../api/user';

type LoginProps = {
  navigation: StackNavigationProp<any>;
};

const Login: FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (): Promise<void> => {
    setError('');
    setLoading(true);

    try {
      const result = await loginUser(email, password);

      if (!result.status) {
        // Login failed
        setError(result.error);
      } else {
        // Login successful
        console.log('User logged in:', result.data);
        navigation.navigate(Routes.Home);
      }
    } catch (err) {
      setError('Unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

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
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            title={loading ? 'Logging in...' : 'Login'}
            onPress={handleLogin}
            isDisabled={loading || email.length < 5 || password.length < 8}
          />
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
  error: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
});

export default Login;
