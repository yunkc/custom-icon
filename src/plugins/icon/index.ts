import { App, createVNode, render } from 'vue';
import Icon from './Icon.vue';

const icons: string[] = [];

export default {
    install: (app: App, options = {}) => {
        // Plugin code goes here
        app.component('Icon', Icon);

        const files: any = import.meta.globEager('../../assets/svg/*.svg');
        
        Object.keys(files).forEach((key: string) => {
            const matched = key.match(/([A-Za-z0-9-_]+)\./i);
            
            if (matched) {
                app.component('icon-' + matched[1], files[key]);
                icons.push(matched[1]);
            }
        });
    },
};

export { Icon, icons };
