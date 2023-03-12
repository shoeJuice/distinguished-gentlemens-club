import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { submitContactForm } from "./functions";

/**
 * Render a Contact Form
 **/

// TODO: Decide between importing submit handler from a separate file for mocking or include it within React component

export const ContactForm = ({ onSubmit }: any) => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const emailRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const telephoneRef = useRef<HTMLInputElement>(null);

  const processFields = () => {
    //This can be abstracted into a separate function for readability.
    console.log(message);
    if (
      messageRef.current &&
      firstNameRef.current &&
      lastNameRef.current &&
      emailRef.current &&
      telephoneRef.current
    ) {
      let newForm = {
        "First Name": firstNameRef.current.value,
        "Last Name": lastNameRef.current.value,
        "Email Address": emailRef.current.value,
        "Phone #": telephoneRef.current.value,
        Message: messageRef.current.value,
      };
      submitContactForm(newForm).then((res) => {
        switch (res.status) {
          case 200:
            setFormSubmitted(true);
            break;
          default:
            console.log(res);
            window.alert(res);
            break;
        }
      });
    } else {
      window.alert("Please fill out all fields");
    }
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.maxLength = 500;
      messageRef.current.addEventListener("input", () => {
        if (messageRef.current) {
          setMessage(messageRef.current.value);
        }
      });
    }
  }, []);

  return !formSubmitted ? (
    <Box mt={8} padding={8} borderRadius={8} backgroundColor="gray.600">
      <VStack alignItems="flex-start">
        <FormControl>
          <FormLabel htmlFor="email">First Name</FormLabel>
          <Input
            type="text"
            id="first-name"
            ref={firstNameRef}
            aria-describedby="first-name-helper-text"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Last Name</FormLabel>
          <Input
            type="text"
            id="last-name"
            ref={lastNameRef}
            aria-describedby="last-name-helper-text"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            type="email"
            id="email"
            ref={emailRef}
            aria-describedby="email-helper-text"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Telephone #</FormLabel>
          <Input
            type="tel"
            id="telephone"
            ref={telephoneRef}
            aria-describedby="tel-helper-text"
          />
        </FormControl>
        <FormControl
          isInvalid={
            messageRef.current
              ? messageRef.current.textLength > messageRef.current.maxLength
              : false
          }
        >
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            ref={messageRef}
            aria-describedby="message-helper-text"
          />
          <FormHelperText>
            {message.length
              ? `${message.length}/${messageRef.current?.maxLength}`
              : ""}
          </FormHelperText>
        </FormControl>
        <Button
          mt={2}
          onClick={() => processFields()}
        >
          Submit
        </Button>
      </VStack>
    </Box>
  ) : (
    <Text>
      Thank you for your submission! We will get back to you as soon as
      possible.
    </Text>
  );
};
