import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    changeValue(e) {
        console.log(e)
        this.setState({ userInput: e })
    }   
    setEvenOrOdd(userInput) {
        let arr = userInput.split(',')
        let evens = []
        let odds = []

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            } else {
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds })
    }
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Even and Odds</h4>
                <input onChange={(e) => this.changeValue(e.target.value)} className='inputLine' />
                <button onClick={() => this.setEvenOrOdd(this.state.userInput)} className='confirmationButton'>Click</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}