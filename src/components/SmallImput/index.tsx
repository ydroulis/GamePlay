import React, { useState } from "react";
import { TextInput, TextInputProps  } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/Styles/theme";



export function SmallImput({ ...rest }: TextInputProps) {
    return (
       <TextInput style={styles.container} keyboardType="numeric" {...rest}/>
    )
}