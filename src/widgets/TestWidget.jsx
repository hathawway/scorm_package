import { TestWrapper } from "../components/TestWrapper.jsx";
import { useState } from "react";
import { doneTests } from "../api/scorm.js";

export function TestWidget() {

	const [localScore, setLocalScore] = useState(0);
	const [questionBank] = useState([
		{
			text: "dapp означает...",
			variants: ["Децентрализованное приложение", "deversivicated application double drive", "Деконструированное приложение"],
			rightAnswer: "Децентрализованное приложение",
		},
		{
			text: "Где хранятся данные DApp?",
			variants: ["На узлах сети блокчейн", "Распределяются (децентрализуются) между несколькими датацетрами", "в облаке"],
			rightAnswer: "На узлах сети блокчейн",
		},
		{
			text: "MetaMask - это ...?",
			variants: ["Приложение в браузере предоставляющее API для взаимодействия с сетью блокчейн", "криптокошелёк", "WEB интерфейс для работы с криптовалютой"],
			rightAnswer: "Приложение в браузере предоставляющее API для взаимодействия с сетью блокчейн",
		},
		{
			text: "Web3.js — это ...?",
			variants: ["JavaScript библиотека реализующая API к блокчейн сети", `расширение для браузера для "Входа" в блокчейн`, "Библиотека для шифрования данных и сохранения их в блокчейн"],
			rightAnswer: "JavaScript библиотека реализующая API к блокчейн сети",
		},
		{
			text: "В какой сети на платформе Ethereum можно получить бесплатные токены для тестирования кода?",
			variants: ["Testnet", "Dummynet", "FreeMoneyHere"],
			rightAnswer: "Testnet",
		}
	])


	const [currentQ, setCurrentQ] = useState(0)

	const [testIsDone, setTestIsDone] = useState(false)

	return (
		<div>
			{!testIsDone ? currentQ < questionBank.length ? <TestWrapper
				question={questionBank[currentQ].text}
				variants={questionBank[currentQ].variants}
				sendAnswer={(answer) => {
					if (answer === questionBank[currentQ].rightAnswer) {
						setLocalScore(localScore + 1)
					}
					setCurrentQ(currentQ + 1)
				}}
			/> : <button onClick={() => {
					doneTests(questionBank.length, localScore)
					setTestIsDone(true)
				}}>Закончить</button>
				: <div>Спасибо! Это окно можно закрыть</div>
			}

		</div>
	)
}
