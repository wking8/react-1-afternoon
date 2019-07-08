import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            superHonkys: [
                {
                    name: 'Jimmy Legs',
                    age: 33,
                    skill: 'Drinking da beers'
                },
                {
                    name: 'Colin King',
                    age: 66,
                    skill: 'Making da money'
                },
                {
                    name: 'Earle',
                    age: 28,
                    skill: 'Absolutely nothing'
                }
            ],
            userInput: '',
            filteredsuperHonkys: []
        }
    }
    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'></span>
                <input lassName='inputLine' />
                <button className='confirmationButton'>Do Things</button>
                <span className='resultsBox filterObjectRB'></span>
            </div>
        )
    }
}