import "./App.css"

import React, { useState } from "react"

function App() {
	const [amount, setAmount] = useState("")

	const handleAmountChange = e => {
		setAmount(e.target.value)
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
