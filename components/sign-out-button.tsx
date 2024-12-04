import { useAuth } from "@clerk/clerk-expo";
import { Button } from "react-native";

function SignOutButton() {
  const { signOut } = useAuth();
  return <Button title="Sign Out" onPress={() => signOut()} />;
}

export default SignOutButton;
