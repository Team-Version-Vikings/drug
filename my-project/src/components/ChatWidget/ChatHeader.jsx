import React from "react";
import styled from "styled-components";
import { FaMinus } from "react-icons/fa";

const Header = styled.div`
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatHeader = () => {
  return (
    <Header>
      <span>Chat</span>
      <FaMinus />
    </Header>
  );
};

export default ChatHeader;
