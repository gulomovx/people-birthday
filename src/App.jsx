import data from "./components/db";
import List from "./components/List";
import { useState } from "react";
import "./App.css";
import EventFrom from "./EventFrom";

function App() {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };
  return (
    <div className="flex  justify-center ">
      <div className="">
        <div className="p-5 shadow bg-white rounded  w-[400px] mt-36 mb-20 text-center">
          <h1 className="text-2xl">
            {people ? people.length : 0} birthdays today
          </h1>
          <List people={people} deletePerson={deletePerson} />
          {people && (
            <button
              onClick={() => {
                setPeople(null);
              }}
              className="bg-[#D946ef] p-2 rounded block w-[100%] text-white"
            >
              Clear All
            </button>
          )}
          {!people && (
            <button
              onClick={() => {
                setPeople(data);
              }}
              className="bg-green-300 p-2 rounded block w-[100%] text-black"
            >
              Display
            </button>
          )}
        </div>
      </div>
      {/* <EventFrom/> */}
    </div>
  );
}

export default App;
