import "./App.css"

import React, { useState } from "react"

function App() {
	const [amount, setAmount] = useState("")

	const handleAmountChange = e => {
		const keyPressed = e.nativeEvent.data

		const keyPattern = /\d/
		const amountValue = e.target.value

		const strippedAmount = amountValue.replaceAll(",", "")

		if (
			keyPattern.test(Number(keyPressed)) ||
			(!amount.includes(".") && keyPressed.includes("."))
		) {
			const amountArray = strippedAmount.split(".")

			const firstPart = Number(amountArray[0]).toLocaleString()
			const secondPart = amountArray[1]
			let amountString = firstPart

			if (amountArray.length === 2) {
				amountString += `.${secondPart}`
			}

			if (amountString.length === 1 && amountString == 0) {
				amountString = ""
			}
			setAmount(amountString)
		} else {
			return
		}
	}

	return (
		<section className='app'>
			<form className='form' onSubmit={e => e.preventDefault()}>
				<h2 className='form__heading'>Make Payment </h2>
				<div>
					<input
						type='text'
						className='form__input'
						name='amount'
						placeholder='Amount'
						onChange={handleAmountChange}
						value={amount}
					/>
				</div>
				<div>
					<input
						type='submit'
						className='form__input--submit'
						value={`Pay now`}
					/>
				</div>
			</form>
		</section>
	)
}

export default App
