import "./App.css"

import React, { useState } from "react"

function App() {
	const [amount, setAmount] = useState("")

	const handleAmountChange = e => {
		console.log(e)
		const keyPressed = e.nativeEvent.data
		const keyPattern = /\d/

		if (keyPattern.test(Number(keyPressed))) {
			const amountValue = e.target.value.trim()
			const strippedAmount = amountValue.replaceAll(",", "")
			const amountString = strippedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
