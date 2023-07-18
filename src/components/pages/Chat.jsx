// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';
// import { API } from 'aws-amplify';

// const Chat = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // 초기 메시지 로드 등 초기화 작업을 수행합니다.
//     loadInitialMessages();
//   }, []);

//   const loadInitialMessages = async () => {
//     // 초기 메시지를 서버에서 가져오는 로직을 구현합니다.
//     try {
//       const response = await API.get('chatAPI', '/messages');
//       const initialMessages = response.data.map((message) => ({
//         _id: message.id,
//         text: message.text,
//         createdAt: new Date(message.timestamp),
//         user: {
//           _id: message.userId,
//           name: 'User',
//         },
//       }));
//       setMessages(initialMessages);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSend = async (newMessages = []) => {
//     // 메시지를 보내는 로직을 구현합니다.
//     try {
//       const message = {
//         text: newMessages[0].text,
//         timestamp: new Date().toISOString(),
//       };

//       await API.post('chatAPI', '/messages', { body: message });

//       setMessages((previousMessages) =>
//         GiftedChat.append(previousMessages, newMessages)
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <GiftedChat
//         messages={messages}
//         onSend={handleSend}
//         user={{
//           _id: 'user-id', // 사용자 식별자
//           name: 'User', // 사용자 이름
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default Chat;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // 초기 메시지 로드 등 초기화 작업을 수행합니다.
    loadInitialMessages();
  }, []);

  const loadInitialMessages = () => {
    // 초기 메시지를 서버에서 가져오는 로직을 구현합니다.
    // 서버에서 받은 메시지를 GiftedChat에서 사용하는 형식으로 변환하여 setMessages를 호출합니다.
    const initialMessages = [
      {
        _id: 1,
        text: 'こんにちは !!😀',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Server',
        },
      },
    ];
    setMessages(initialMessages);
  };

  const handleSend = (newMessages = []) => {
    // 메시지를 보내는 로직을 구현합니다.
    // 서버로 메시지를 전송하고, 전송 성공 시 GiftedChat에서 사용하는 형식으로 변환하여 setMessages를 호출합니다.
    const convertedMessages = newMessages.map((message) => {
      return {
        _id: message._id,
        text: message.text,
        createdAt: message.createdAt,
        user: {
          _id: 1,
          name: 'User',
        },
      };
    });
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, convertedMessages)
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Chat;