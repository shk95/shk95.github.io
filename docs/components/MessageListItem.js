// import lifecycleLogger from '../mixins/lifecycle-logger.mixin.js';
export default {
    name: 'MessageListItem',
    // mixins: [lifecycleLogger],
    /* '|' 를 통해서 여러개의 필더 등록 */
    template: `<li>{{ item.text }} = {{ item.createdAt | datetime }}
    <button @click="deleteClicked">X</button></li>`,
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    methods: {
        deleteClicked() {
            this.$emit('delete');
        }
    }
};
