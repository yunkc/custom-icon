import { App, createVNode, render } from 'vue';
import Message from './Message.vue';

const createCotainer = () => {
    let temp = document.querySelector('.temp-msg-container');
    if (!temp) {
        temp = document.createElement('div');
        temp.className = 'temp-msg-container';
        document.body.appendChild(temp);
    }
    return temp;
};

export default {
    install: (app: App, options = {}) => {

        // Plugin code goes here

        app.config.globalProperties.$msg = ({
            text = '',
            type = 'success',
        }) => {
            const vnode = createVNode(Message, { text, type });
            const el = createCotainer()
            render(vnode, el);

            setTimeout(() => {
                render(null, el);
            }, 1000);
        };
    },
};

export { Message };
