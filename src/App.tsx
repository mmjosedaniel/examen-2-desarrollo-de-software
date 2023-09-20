import React from "react";

interface Result {
	bidimensionalArray1: number[][];
	bidimensionalArray2: number[][];
	bidimensionalArray3: number[][];
}

function App() {
	function createBidimensionalArray(n: number, m: number): number[][] {
		const result: number[][] = [];
	
		for (let i = 0; i < n; i++) {
			const row: number[] = [];
			for (let j = 0; j < m; j++) {
				const randomNumber = Math.floor(Math.random() * 10);
				row.push(randomNumber);
			}
			result.push(row);
		}
	
		return result;
	}

	function multiplayBidimensionalsArrays(n: number, m: number): Result {
		const bidimensionalArray1 = createBidimensionalArray(n, m);
		const bidimensionalArray2 = createBidimensionalArray(n, m);
		
		const bidimensionalArray3: number[][] = [];

		for (let i = 0; i < n; i++) {
			const row: number[] = [];
			for (let j = 0; j < m; j++) {
				const product = bidimensionalArray1[i][j] * bidimensionalArray2[i][j]
				row.push(product);
			}
			bidimensionalArray3.push(row);
		}

		return { bidimensionalArray1, bidimensionalArray2, bidimensionalArray3 };
	}

	const result = multiplayBidimensionalsArrays(3, 3)
  console.log(result);
	
  return (
    <div>
		
    </div>
  );
}

export default App;
