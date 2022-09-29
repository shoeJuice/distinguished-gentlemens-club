import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { FormMethods } from "./utils";

/**
 * Render a Contact Form
 **/

// TODO: Decide between importing submit handler from a separate file for mocking or include it within React component


export const ContactForm = ({onSubmit} : any) => {

    FormMethods.handleSubmit = () => {
        console.log("Submitting form");
    }

    return (<Box>
        <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input type="email" id="email" aria-describedby="email-helper-text" />
        </FormControl>
    </Box>);
}