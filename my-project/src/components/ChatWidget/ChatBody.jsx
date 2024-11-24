import React from "react";
import styled from "styled-components";

const Body = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f8f8f8;
`;

const Message = styled.div`
  margin: 5px 0;
  padding: 8px;
  background-color: ${({ sender }) => (sender === "user" ? "#007bff" : "#ddd")};
  color: ${({ sender }) => (sender === "user" ? "#fff" : "#000")};
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  border-radius: 5px;
  max-width: 70%;
`;

const ChatBody = ({ messages }) => {
  return (
    <Body>
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender}>
          {msg.text}
        </Message>
      ))}
    </Body>
  );
};

export default ChatBody;
