"use client";
import { useState } from "react";

export default function SortingExplanation() {
  const initialArray = [8, 9, 1, 7, 3, 0, 2, 5, 4, 6];
  const [array, setArray] = useState([...initialArray]);
  const [steps, setSteps] = useState([]);
  const [sorting, setSorting] = useState(false);

  const bubbleSort = (arr) => {
    let stepsList = [];
    let sortedArray = [...arr];
    let len = sortedArray.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          [sortedArray[j], sortedArray[j + 1]] = [
            sortedArray[j + 1],
            sortedArray[j],
          ];
          stepsList.push([...sortedArray]);
        }
      }
    }
    return stepsList;
  };

  const startSorting = () => {
    setArray([...initialArray]);
    setSorting(true);
    setSteps([]);
    const sortingSteps = bubbleSort(array);
    let index = 0;
    const interval = setInterval(() => {
      if (index < sortingSteps.length) {
        setArray(sortingSteps[index]);
        setSteps((prevSteps) => [...prevSteps, sortingSteps[index]]);
        index++;
      } else {
        clearInterval(interval);
        setSorting(false);
      }
    }, 1000);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Sorting Numbers (Bubble Sort)</h1>
      <p className="mb-2">
        Bubble sort is a simple sorting algorithm that repeatedly steps through
        the list, compares adjacent elements and swaps them if they are in the
        wrong order.
      </p>
      <p className="mb-2">Original Array: {JSON.stringify(initialArray)}</p>
      <p className="mb-4 font-bold">Current Array: {JSON.stringify(array)}</p>
      <button
        onClick={startSorting}
        disabled={sorting}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {sorting ? "Sorting..." : "Start Sorting"}
      </button>
      <h2 className="text-lg font-bold mt-4">Sorting Steps:</h2>
      <ul className="text-left">
        {steps.map((step, index) => (
          <li key={index} className="mb-1">
            Step {index + 1}: {JSON.stringify(step)}
          </li>
        ))}
      </ul>
    </div>
  );
}
