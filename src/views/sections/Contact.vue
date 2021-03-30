<template>
  <div class="d-flex align-center justify-center tibro">
    <beautiful-chat
      id="chatBox"
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="0"
      :isOpen="true"
      :close="closeChat"
      :icons="{}"
      :open="openChat"
      :showEmoji="false"
      :showFile="false"
      :showEdition="true"
      :showDeletion="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="false"
      :showCloseButton="false"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :disableUserListToggle="false"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    >
      <template v-slot:header>
        <div class="align-self-center px-2">
          <h4 class="font-weight-bold">🤖 let's chat!</h4>
        </div>
      </template>
    </beautiful-chat>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      participants: [
        {
          id: 'tibor',
          name: 'Tibor',
          imageUrl: require('@/assets/ja2.png'),
        },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: '',
      messageList: [
        { type: 'text', author: `tibor`, data: { text: `Hi there! So, instead of boring old contact form, I've decided to upload a part of myself to the web so you can chat with me!` } },
        { type: 'text', author: `tibor`, data: { text: `Feel free to ask me anything!` } },
        { type: 'text', author: `tibor`, data: { text: `Just bear in mind that uploaded part of me isn't really *that* smart. 😅` } },
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff',
        },
        launcher: {
          bg: '#4e8cff',
        },
        messageList: {
          bg: '#ffffff',
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff',
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222',
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867',
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
      bot: [
        { match: /^(hi|hello|hey|howdy)$/, response: ['Hi! 👋', 'Hello!', 'OMGHAI!', 'Hello there!'] },
        { match: /^how (are|is) (u|you|tibor)/, response: [`I'm good, thanks... and how are you?`, `Not too shabby. And yourself?`] },
      ],
    };
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
      this.handleResponse(message.data.text);
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
      // console.log('Emit typing event');
    },
    editMessage(message) {
      const m = this.messageList.find((m) => m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    },
    handleResponse(text) {
      function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const startReplyMS = rand(1000, 2500);
      const finishReplyMS = rand(3000, 6000);

      const msg = text.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

      let reply = `I have no idea what you want from me`;

      for (const item of this.bot) {
        if (item.match.test(msg)) {
          reply = item.response.length > 1 ? item.response[rand(0, item.response.length - 1)] : item.response[0];
        }
      }

      setTimeout(() => {
        this.showTypingIndicator = 'tibor';
        setTimeout(() => {
          this.showTypingIndicator = '';
          this.messageList = [...this.messageList, { author: 'tibor', data: { text: reply }, type: 'text' }];
        }, finishReplyMS);
      }, startReplyMS);
    },
  },
};
</script>

<style lang="css">
#chatBox div {
  position: static !important;
}
.sc-message--text-content {
  margin-bottom: 8px !important;
  margin-top: 8px !important;
}
.sc-user-input--button {
  margin-right: 18px !important;
}
</style>
