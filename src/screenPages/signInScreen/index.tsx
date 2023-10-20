import {Button} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "@/css";
<<<<<<< Updated upstream
import { AuthScreenNaviagtionType } from "@/navigations/typesOfPages";
=======
import { AuthScreenNavigationType } from "@/navigations/typesOfPages";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
>>>>>>> Stashed changes


const SignInScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">> ()
    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }


    return (
        <Box>
            <Text> Sign In Screen </Text>
            <Button title="Navigate to sign up" onPress={navigateToSignUpScreen} />

        </Box>

    )
}

export default SignInScreen