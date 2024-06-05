import { render } from 'preact';
import App from './App';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge'; 
bridge.send("VKWebAppInit");

render(
    <ConfigProvider>
        <AdaptivityProvider>
            <App />
        </AdaptivityProvider>
    </ConfigProvider>,
    document.getElementById('root')
);
