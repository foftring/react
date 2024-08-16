import { Text, View } from 'react-native';
import { Link } from 'expo-router';
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Hello World!</Text>
      <Link href="/profile">
        <Text>Go to Profile</Text>
      </Link>
    </View>
  );
}