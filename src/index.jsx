import { render } from 'preact';
import App from './App';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge'; 
bridge.send("VKWebAppInit");

bridge.subscribe((e) => console.log(e)); 

if (bridge.supports("VKWebAppResizeWindow")) {
    bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
  }

render(
    <ConfigProvider>
        <AdaptivityProvider>
            <App />
        </AdaptivityProvider>
    </ConfigProvider>,
    document.getElementById('root')
);
