steps:
-> get username on client side, store it in client side and also emit it to server side through a event.
-> server then broadcast the message "username has joined the conversation" to all sockets.
-> client side gets the message from the input field.
-> First display it on the own screen as own message using renderMessage() function. 
-> THen emit the message using 'chat' event.
-> Server then broadcast the message to all other sockets.
-> All client sockets get the broadcasted message and display it on their screen using the renderMessage() function.



Added:
-> users list on the left panel. Adding newly joined users and removing the exited users. ✅
-> Unique uername feature added. ✅