import { Panel, PanelHeader, Div, FormLayout, FormItem, Input, Button, Snackbar, Avatar } from "@vkontakte/vkui";
import { Icon16ArrowLeftOutline, Icon16Done, Icon28ErrorCircleOutline } from "@vkontakte/icons";
import { useState, useEffect } from "react";

const GameMultiPanel = ({ goBack }) => {
  const [time, setTime] = useState(0);
  const [words, setWords] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [snackbar, setSnackbar] = useState(null);
  const [socket, setSocket] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  useEffect(() => {
    const newSocket = 'http://localhost:4000';
    setSocket(newSocket);

    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));

  }, [setSocket]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const showSnackbar = (message, icon = null) => {
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        before={icon && <Avatar size={24} style={{ background: 'var(--vkui--color_background_accent)' }}>{icon}</Avatar>}
      >
        {message}
      </Snackbar>
    );
  };

  const handleSend = () => {
    const regex = /^[а-яА-ЯёЁ]+$/;
    if (!regex.test(inputValue)) {
      showSnackbar("Слово должно быть на русском языке и не содержать цифры, пробелы или специальные символы.", <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />);
    } else if (inputValue.length < 2) {
      showSnackbar("Слово должно состоять минимум из двух букв.", <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />);
    } else if (words.includes(inputValue)) {
      showSnackbar("Это слово уже использовалось.", <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />);
    } else if (words.length === 0) {
      setWords([inputValue]);
      setInputValue(inputValue.slice(-2));
      socket.emit('word', inputValue);
    } else if (inputValue.startsWith(words[words.length - 1].slice(-2))) {
      setWords([...words, inputValue]);
      setInputValue(inputValue.slice(-2));
      socket.emit('word', inputValue);
    } else {
      showSnackbar("Новое слово должно начинаться с двух последних букв предыдущего слова.", <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />);
    }
  };

  const getWordStyle = (index) => {
    const isPlayerOne = index % 2 === 0;
    return {
      backgroundColor: isPlayerOne ? 'lightblue' : 'lightgreen',
      fontWeight: isPlayerOne ? 'bold' : 'normal',
      color: isPlayerOne ? 'darkblue' : 'darkgreen',
    };
  };

  return (
    <Panel id="game_multi">
      <PanelHeader before={<Div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Icon16ArrowLeftOutline width={20} height={20} onClick={goBack} /></Div>}>Играть с другом</PanelHeader>
      <Div style={{ textAlign: "center", fontSize: "24px" }}>{time} сек</Div>
      <Div style={{ textAlign: "center", fontSize: "18px" }}>Ход игрока {currentPlayer}</Div>
      <Div style={{ height: "200px", overflowY: "auto", border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        {words.map((word, index) => (
          <Div key={index} style={getWordStyle(index)}>{word}</Div>
        ))}
      </Div>
      <FormLayout>
        <FormItem>
          <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </FormItem>
        <FormItem>
          <Button size="l" stretched onClick={handleSend}>Отправить</Button>
        </FormItem>
      </FormLayout>
      {snackbar}
    </Panel>
  );
};

export default GameMultiPanel;
