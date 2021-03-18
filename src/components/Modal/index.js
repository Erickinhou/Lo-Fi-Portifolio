import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, MessageSquare } from "react-feather";
import { ModalContext } from "../../GlobalContext";
import {
  Container,
  ModalCard,
  Title,
  EmailInput,
  Label,
  Form,
  MessageInput,
  SubmitButton,
  CloseModalOverlay
} from "./style";

const Index = () => {
  const history = useHistory();
  const [state, handleSubmit] = useForm("mdopqvbr");
  const { setIsModalOpen } = useContext(ModalContext);
  if (state.succeeded) {
    history.push("/");
    console.log("Thank you!");
  }
  return (
    <Container>
      <CloseModalOverlay onClick={() => setIsModalOpen(false)} />
      <ModalCard>
        <Title>Say Hello!</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">
              <Mail />
              Put your email here.
            </Label>
            <EmailInput id="email" type="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Label>
              <MessageSquare />
              Say something cool
            </Label>
            <MessageInput id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <SubmitButton
            whileHover={{
              scale: 1.1
            }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </SubmitButton>
        </Form>
      </ModalCard>
    </Container>
  );
};

export default Index;
