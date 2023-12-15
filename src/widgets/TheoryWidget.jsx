import { useEffect, useState } from "react";
import { doneTheory } from "../api/scorm.js";
import { TextWrapper } from "../components/TextWrapper.jsx";

export function TheoryWidget(props) {
	const [openedPage, setOpenedPage] = useState(`/`)
	const [router, setRouter] = useState({})

	useEffect(() => {
		setRouter( {
			"/daap": <TextWrapper
				header={"Что такое дапп?"}
				body={`Термин dapp означает децентрализованное приложение. 
Обычно децентрализованными приложениями называется, на самом деле не децентрализованные приложения: это все еще обычные веб-сайты, 
размещенные на Amazon или любом другом хостинге (даже статические хостинги, такие как Github Pages или Netlify). Отличие от обычного приложения в том, что данные хранятся в базе данных. Или вы, скорее всего, слышали о блокчейне.
Если бы вы сравнили стандартное приложение с децентрализованным приложением, стандартное приложение использовало бы базу данных MySQL, например блог Wordpress, где децентрализованное приложение использовало бы база данных, размещенная на нескольких серверах, представляющих сеть блокчейн.

Так почему же оно называется «децентрализованным приложением», если код все еще находится в руках серверов Amazon?
Потому что в некоторых случаях фактический код приложения на самом деле не имеет большого значения: если приложение закрыто, а код недоступен из-за проблемы на хостинге, вы можете просто развернуть его где-нибудь еще. В худшем случае это может привести к простою ваших пользователей.
Что действительно важно, так это данные. Вот чего вы хотите избежать централизации.

Теперь, если эти данные хранятся в блокчейне, что бы ни случилось, их вряд ли можно полностью снести, поскольку вы можете просто перераспределять их столько раз, сколько хотите, на разных серверах, поскольку их роль — просто визуальный интерфейс. для вашей базы данных/блокчейна.

Это хорошо, но недостаточно! Ваши пользователи могут по-прежнему не иметь возможности использовать ваше приложение, и такой способ создания децентрализованных приложений не решает эту проблему. И именно поэтому была создана IPFS. Это протокол, позволяющий сделать ваше приложение доступным в одноранговой сети, как фильм в BitTorrent. Нет больше единой точки хостинга, ваши активы децентрализованы в сети. К сожалению, на момент написания этих строк вам все еще потребуется хотя бы некоторая централизация, чтобы ваше децентрализованное приложение работало с приличным UX.`}
				done={() => {
					props.setScore(doneTheory("1"));
					setOpenedPage(`/`);
				}}/>,
			"/Metamask": <TextWrapper
				header={"MetaMask"}
				body={`Криптокошелёк и шлюз для доступа к блокчейн-приложениям.

Он предоставляет возможность хранить, отправлять и обменивать токены. Есть версии кошелька как для браузера, так и для мобильного устройства.

MetaMask обеспечивает простой и безопасный способ взаимодействия с приложениями на основе новой децентрализованной веб-страницы.

Все пароли и ключи генерируются на устройстве пользователя, поэтому только он имеет доступ к своим аккаунтам и данным`}
				done={() => {
					props.setScore(doneTheory("2"));
					setOpenedPage(`/`);
				}}/>,
			"/Web3js": <TextWrapper
				header={"Использование библиотеки Web3.js с плагином MetaMask"}
				body={`Web3.js — это JavaScript библиотека. MetaMask встраивает Web3.js в каждую открытую страницу, поэтому можно протестировать простые команды непосредственно в javascript консоли в Chrome Developer Tools. Важно отметить, на момент написания этой статьи, актуальная версия Web3.js — 0.20.1. Документация для версии 0.x.x доступна по ссылке, не путайте с документацией для версии 1.0 (ссылка).
Выполним две команды, одну на получение данных, например баланса аккаунта, вторую на изменение, например задание строки в смарт контракте StringHolder из предыдущей статьи. Предварительно не забудьте создать аккаунт в MetaMask, подключиться к нужной сети (в данном случае Ropsten Test Network) и зайти в консоль Developer Tools.`}
				done={() => {
					props.setScore(doneTheory("3"));
					setOpenedPage(`/`);
				}}/>,
			"/what_daap_do": <TextWrapper
				header={"Что должен делать DApp"}
				body={`Сформулируем задачу. У нас должен быть контракт, представляющий собой благотворительную организацию со счетом. В этой организации могут быть зарегистрированы пользователи, которые могут выступать и в качестве получателей пожертвований и в качестве голосующих за предложения. Нужен способ создать предложение о перечислении денег (эфира) со счета организации на один из зарегистрировавшихся аккаунтов. Чтобы не было искушения забрать за раз весь эфир введем ограничение — предложить можно не более 1 эфира. Далее идет голосование (можно голосовать “за” или “против”), которое нельзя завершать до определенного дедлайна (5 минут с момента создания предложения). После дедлайна голоса продолжают приниматься, но должна быть возможность завершить голосование, и если оно завершилось с бо́льшим количеством “за” чем “против” — перечислять эфир со счета организации на счет получателя. Если больше голосов “против” — ничего не делать.
В целом схема приложения такая:
Два js модуля — Blockchain.js и BlockchainApi.js — отвечают за работу с блокчейном. Они делают одно и тоже, только первый работает c Web3.js и через ноду MetaMask напрямую обращается к блокчейну, второй — делает ajax запросы к Rails API, где уже происходит взаимодействие с блокчейном через гем ethereum.rb. Само клиентское приложение написано на React и не зависит от того, какой js модуль из двух используется.
`}
				done={() => {
					props.setScore(doneTheory("4"));
					setOpenedPage(`/`);
				}}/>,
			"/decentralized_net": <TextWrapper
				header={"Децентрализованные сети"}
				body={`Когда вы взаимодействуете с децентрализованным приложением, у вас есть разные «режимы», в которых приложение может работать. Эти режимы представлены сетями. Вы можете связать сети с традиционными средами приложений: точно так же, как у вас есть производственная и промежуточная среда для вашего веб-сайта, децентрализованные приложения обычно работают с основной и тестовой сетью.

То, что обычно называют Testnet (тестовой сетью), очень похоже на демонстрационный или черновой режим для децентрализованного приложения. Существуют разные режимы, но вы, возможно, слышали о Kovan, который является самым популярным в блокчейне Ethereum.
Однако важно понимать, что эти режимы на самом деле связаны только с взаимодействием блокчейна: подумайте его как демонстрационную базу данных или демо-счет на веб-сайте. Любые данные, которые вы сохраните в демо-режиме, не будут сохранены в вашей реальной учетной записи, а будут сохранены только в демо-версии. тратьте свои драгоценные монеты или жетоны, пока не переключите децентрализованное приложение в режим основной сети.

Для блокчейна Ethereum вы обычно управляете режимом, в котором работает децентрализованное приложение, непосредственно из MetaMask.

Вот и все. Обладая такими знаниями, я смог работать над внешним интерфейсом продвинутого децентрализованного приложения в производстве и достаточно понял, чтобы обеспечить хороший пользовательский интерфейс и UX в мире блокчейна.`}
				done={()=>{
					props.setScore(doneTheory("5"));
					setOpenedPage(`/`);
				}}
			/>,
			"/about": <TextWrapper
				header="Автор курса"
				body="Окладникова Ольга Дмитриевна. Студент 2 курса магистратуры ИТМО"
				done={() => {
					props.setScore(doneTheory("6"));
					setOpenedPage(`/`);
				}}/>,
		})
	}, []);

	let c = router[openedPage]
	if (!c) {
		c = <h3>Выбрать тему</h3>
	}

	return (
		<div style={{display: "flex", flexDirection: "column"}}>
			{c}
			<button style={{marginBottom: "10px"}} onClick={() => setOpenedPage("/daap")}>Что такое ДАпп?</button>
			<button style={{marginBottom: "10px"}} onClick={() => setOpenedPage("/Metamask")}>MetaMask</button>
			<button style={{marginBottom: "10px"}} onClick={() => setOpenedPage("/Web3js")}>Web3js</button>
			<button style={{marginBottom: "10px"}} onClick={() => setOpenedPage("/what_daap_do")}>Для чего нужны DApp</button>
			<button style={{marginBottom: "10px"}} onClick={() => setOpenedPage("/decentralized_net")}>Децентрализованные сети</button>
			<button style={{marginBottom: "10px"}} onClick={() => setOpenedPage("/about")}>Об авторе</button>

		</div>
	)
}
