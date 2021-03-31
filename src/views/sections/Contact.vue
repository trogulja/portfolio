<template>
  <v-card color="transparent" elevation="0" class="px-6 pt-8">
    <v-card-title class="flex-column align-start custom-section-title align-self-stretch">
      <h4 class="black--text">Contact</h4>
      <div class="card-element-separator mt-4 mb-8"></div>
    </v-card-title>
    <v-card-text class="d-flex align-center justify-center py-16 align-self-stretch">
      <beautiful-chat
        id="chatBox"
        :participants="participants"
        :title-image-url="''"
        :on-message-was-sent="onMessageWasSent"
        :message-list="messageList"
        :new-messages-count="0"
        :is-open="true"
        :close="closeChat"
        :icons="{}"
        :open="openChat"
        :show-emoji="false"
        :show-file="false"
        :show-edition="true"
        :show-deletion="true"
        :show-typing-indicator="showTypingIndicator"
        :show-launcher="false"
        :show-close-button="false"
        :colors="colors"
        :always-scroll-to-bottom="true"
        :disable-user-list-toggle="false"
        :message-styling="true"
        @mouseover.native="disableScroll"
        @mouseleave.native="enableScroll"
        @onType="handleOnType"
        @edit="editMessage"
      >
        <template v-slot:header>
          <div class="align-self-center px-2">
            <h4 class="font-weight-bold">🤖 let's chat!</h4>
          </div>
        </template>
      </beautiful-chat>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      fullpageScrolling: true,
      participants: [
        {
          id: 'tibor',
          name: 'Tibor',
          imageUrl: require('@/assets/ja2.png'),
        },
      ],
      messageList: [
        { type: 'text', author: `tibor`, data: { text: `Hi there! So, instead of boring old contact form, I've decided to upload a part of myself to the web so you can chat with me!` } },
        { type: 'text', author: `tibor`, data: { text: `Feel free to ask me anything!` } },
        { type: 'text', author: `tibor`, data: { text: `Just bear in mind that uploaded part of me isn't really *that* smart. 😅` } },
      ],
      showTypingIndicator: '',
      colors: {
        header: {
          bg: this.$vuetify.theme.themes.light.brownNormal,
          text: this.$vuetify.theme.themes.light.white,
        },
        launcher: {
          bg: this.$vuetify.theme.themes.light.brownNormal,
        },
        messageList: {
          bg: '#f7f8f2',
        },
        sentMessage: {
          bg: this.$vuetify.theme.themes.light.greenDark,
          text: '#f7f8f2',
        },
        receivedMessage: {
          bg: '#e1e4cd',
          text: this.$vuetify.theme.themes.light.black,
        },
        userInput: {
          bg: '#e5e8d4',
          text: this.$vuetify.theme.themes.light.black,
        },
      },
      isResponding: false,
      botDetect: [
        { match: /what is love/, response: 'haddaway' },
        { match: /(hi|hello|hey|howdy)/, response: 'greet' },
        { match: /^how (are|is) (u|you|tibor)/, response: 'greet2' },
        { match: /email|contact|job|work/, response: 'contact' },
        { match: /weather/, response: 'weather' },
        { match: /^what is/, response: 'stupidQuestion' },
      ],
      botResponse: {
        greet: [
          'Hi! 👋',
          'Hello!',
          'OMGHAI!',
          'Hello there!',
          'Ok, we said that already',
          `Yes, let's repeat this few more times...`,
          `It's fun to just repeat lines non-stop, no?`,
          'My toddler does this all the time too!',
          `I'm getting bored...`,
          'zzzz',
          'zzz',
          '...',
          '...',
          '...',
          '...',
          '...',
          '...',
          '...',
        ],
        greet2: [
          `I'm good, thanks... and how are you?`,
          `Not too shabby. And yourself?`,
          `I think you already asked me this, no?`,
          `Random fact: Did you know that goldfish has a memory of about 3 seconds? Neither did I.`,
          `Not really that good anymore`,
          `Kinda annoyed, honestly...`,
          '...',
          '...',
          '...',
          '...',
          '...',
          '...',
          '...',
          '...',
          '...',
        ],
        weather: [
          'You must have confused me with Zoran Vakula.',
          'Have you looked outside of the window lately?',
          'Have you tried the weather rock method of forecasting?',
          `I'm sorry, but I have no clue about weather - I'm stuck in here!`,
          `Help, I'm stuck in a nightmare!`,
          '...',
          '...',
          '...',
          '...',
          '...',
          '...',
          '...',
          '...',
        ],
        haddaway: [`Oh baby, don't hurt me, don't hurt me, no more... 🎵`],
        stupidQuestion: [
          'Have you tried googling it?',
          'Did you hear about this opensource project called wikipedia?',
          `I don't know, I don't get out often. It's questions like these that are keeping me in.`,
          'Yes, but what is the meaning of life?',
        ],
        contact: [
          'You can contact me at tibor.rogulja@gmail.com',
          'Feel free to send me an email to tibor.rogulja@gmail.com',
          `I'll be happy to hear from you. Just send me an email to tibor.rogulja@gmail.com`,
          'You can reach me at tibor.rogulja@gmail.com',
          `If you're done talking with this robo persona, you can talk with real me at tibor.rogulja@gmail.com`,
        ],
        unknown: [`I don't understand...`, 'Sorry, can you repeat the question?', `Please tell me more!`, `I'm trying but I really don't understand.`, 'Sorry, what?', 'Come again?'],
      },
      botFlow: {
        lastResponse: false,
        responses: {},
      },
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
      if (this.isResponding) return;
      this.isResponding = true;

      const startReplyMS = this.rand(1000, 2500);
      const finishReplyMS = this.rand(3000, 6000);

      const msg = text.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

      let reply;

      for (const item of this.botDetect) {
        if (item.match.test(msg)) {
          reply = this.getReply(item.response);
          break;
        }
      }

      if (!reply) reply = this.getReply('unknown');

      setTimeout(() => {
        this.showTypingIndicator = 'tibor';
        setTimeout(() => {
          this.showTypingIndicator = '';
          this.isResponding = false;
          this.messageList = [...this.messageList, { author: 'tibor', data: { text: reply }, type: 'text' }];
        }, finishReplyMS);
      }, startReplyMS);
    },
    getReply(context) {
      const max = this.botResponse[context].length - 1;
      const current = this.botFlow.responses[context] || 0;
      const next = current + 1 > max ? 0 : current + 1;
      // console.log('Triggered context %s, with vars max %d, current %d, next %d', context, max, current, next);
      this.botFlow.lastResponse = context;
      this.botFlow.responses[context] = next;
      return this.botResponse[context][current];
    },
    rand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    enableScroll() {
      if (this.fullpageScrolling) return;
      this.fullpageScrolling = true;
      this.$fullpage.setMouseWheelScrolling(true);
    },
    disableScroll() {
      if (!this.fullpageScrolling) return;
      this.fullpageScrolling = false;
      this.$fullpage.setMouseWheelScrolling(false);
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
.sc-message-list {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.sc-message-list::-webkit-scrollbar {
  width: 10px;
}
.sc-message-list::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.sc-message-list::-webkit-scrollbar-thumb {
  background: #888;
}
.sc-message-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
