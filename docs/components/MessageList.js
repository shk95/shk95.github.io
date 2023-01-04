import MessageListItem from './MessageListItem.js';
// import lifecycleLogger from '../mixins/lifecycle-logger.mixin.js';
export default {
    name: 'MessageList',
    // mixins: [lifecycleLogger],
    template: `<ul>
    <message-list-item v-for="item in items" :item="item" :key=item.id @delete="deleteMessage(item)"></message-list-item>
    </ul>`,
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    components: {
        MessageListItem,
    },
    methods: {
        deleteMessage(MessageList) {
            this.$emit('delete', MessageList);
        }
    }
};
