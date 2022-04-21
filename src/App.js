import "./App.css"

import React, { useState } from "react"

function App() {
	const [amount, setAmount] = useState("")

	const handleAmountChange = e => {
		const keyPressed = e.nativeEvent.data
		const keyPattern = /\d/

		if (keyPattern.test(Number(keyPressed))) {
			const amountValue = e.target.value
			const strippedAmount = amountValue.replaceAll(",", "")
			const amountInNumber = Number(strippedAmount)

			const amountString = amountInNumber.toLocaleString()

			setAmount(amountString)
		}
	}

	return (
		<section className='app'>
			<form className='form'>
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
