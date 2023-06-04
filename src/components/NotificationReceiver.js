import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationReceiver = ({ idInstance, apiTokenInstance, onNotificationReceived }) => {
    useEffect(() => {
      const receiveNotification = async () => {
        try {
          const url = `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;
          const response = await axios.get(url);
          const notification = response.data;
          onNotificationReceived(notification);
        } catch (error) {
          console.log('Error receiving notification:', error);
        }
      };
  
      const interval = setInterval(receiveNotification, 5000);
  
      return () => clearInterval(interval);
    }, [idInstance, apiTokenInstance, onNotificationReceived]);
  
    const deleteNotification = async (receiptId) => {
      try {
        const url = `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`;
        await axios.delete(url);
      } catch (error) {
        console.log('Error deleting notification:', error);
      }
    };
  
    return null;
  };

  export default NotificationReceiver