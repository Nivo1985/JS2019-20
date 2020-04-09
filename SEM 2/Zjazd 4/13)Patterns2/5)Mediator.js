class User {
  constructor(userName) {
    this.userName = userName;
    this.charRoom = null;
  }

  receiveMessage(message) {
    console.log(this.userName + " <== " + message);
  }

  sendMessage(message) {
    console.log(this.userName + " ==> " + message);
    this.charRoom.sendMessage(message, this);
  }
}

class ChatRoom {
  constructor(chatRoomName) {
    this.chatRoomName = chatRoomName;
    this.users = [];
  }

  sendMessage(message, user) {
    this.users.filter(u => u !== user).forEach(u => u.receiveMessage(message));
  }

  regisgerUser(user) {
    if (this.users.indexOf(user) === -1) {
      this.users.push(user);
      user.charRoom = this;
    }
  }
}

let charRoom = new ChatRoom("Mediator Chatroom");
let userKarol = new User("Karol");
let userAdam = new User("Adam");
let userAnna = new User("Anna");
charRoom.regisgerUser(userKarol);
charRoom.regisgerUser(userAdam);
charRoom.regisgerUser(userAnna);

userAnna.sendMessage("Hi");
