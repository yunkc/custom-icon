import { App } from 'vue';
import Icon from './Icon.vue';

export const icons: string[] = [];

export function setupIcon(app: App) {
    app.component('Icon', Icon);
    const files: any = import.meta.globEager('../assets/svg/*.svg');
    Object.keys(files).forEach((key: string) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched) {
            app.component('icon-' + matched[1], files[key]);
            icons.push(matched[1]);
        }
    });
}

export default Icon;
