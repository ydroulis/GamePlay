import React, { useState } from "react";
import { TextInput, TextInputProps  } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/Styles/theme";



export function TextArea({ ...rest }: TextInputProps) {
    return (
       <TextInput style={styles.container} {...rest}/>
    )
}