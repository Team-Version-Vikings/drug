import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ChatWidgetWrapper = styled.div`
  position: fixed;
  bottom: 150px; /* Adjusted position from bottom */
  right: 20px;
  z-index: 1000;
`;

const ChatButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #348ac7;
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #7474bf;
  }
`;

const ChatBox = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 250px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const MessageBubble = styled.div`
  background-color: #e6f7ff;
  color: #333;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.4;
`;

const ChatButtonSecondary = styled.button`
  background-color: #348ac7;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #7474bf;
  }
`;

const ChatLink = styled(Link)`
  color: #348ac7;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDoctorMessage, setShowDoctorMessage] = useState(false);

  return (
    <ChatWidgetWrapper>
      {/* Toggle Chat Widget */}
      <ChatButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬"}
      </ChatButton>

      {/* Chat Conversation */}
      {isOpen && (
        <ChatBox>
          {!showDoctorMessage && (
            <>
              <MessageBubble>Hi!</MessageBubble>
              <ChatButtonSecondary onClick={() => setShowDoctorMessage(true)}>
                Say Hello
              </ChatButtonSecondary>
            </>
          )}

          {showDoctorMessage && (
            <>
              <MessageBubble>Here is your Mini Doctor:</MessageBubble>
              <ChatLink to="/minidoctor">Go to Mini Doctor</ChatLink>
            </>
          )}
        </ChatBox>
      )}
    </ChatWidgetWrapper>
  );
};

export default ChatWidget;
