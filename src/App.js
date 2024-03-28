import { useState, createContext } from "react";
import Stats from "./Components/Stats";
import Logo from "./Components/Logo";
import TripForm from "./Components/TripForm";
import PackingList from "./Components/PackingList";

const questionss = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export const ItemsContext = createContext({
  items: [],
  setItems: () => {},
});
function App() {
  const [items, setItems] = useState([]);
  const [questions, setQuestions] = useState(questionss);
  return (
    <div className="app">
      <ItemsContext.Provider value={[items, setItems]}>
        <Logo />
        <TripForm />
        <PackingList />
        <Stats />
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
