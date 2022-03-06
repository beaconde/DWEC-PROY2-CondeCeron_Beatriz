import React, { useEffect, useState } from 'react'
import { BiLoaderAlt } from "react-icons/bi";
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

const Utility = () => {

  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    generateComputerChoice()
  }, [])

  useEffect(() => {
    if (userChoice !== '') {
      setLoading(true)
      const result = getResult()
      const timer = setTimeout(() => {
        setResult(result)
        setLoading(false)
      }, 1000)
    }
  }, [userChoice])


  const choices = ['rock', 'paper', 'scissors']

  const generateComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3)
    setComputerChoice(choices[choice])
  }

  const getResult = () => {
    if (userChoice === computerChoice) return 'Ha sido un empate.'
    else if (userChoice === 'rock' && computerChoice === 'scissors') return '¡Has ganado!'
    else if (userChoice === 'paper' && computerChoice === 'rock') return '¡Has ganado!'
    else if (userChoice === 'scissors' && computerChoice === 'paper') return '¡Has ganado!'
    else return 'Has perdido :('
  }

  const playAgain = () => {
    setUserChoice('')
    setResult('')
    generateComputerChoice()
  }

  const displayIcon = (choice) => {
    if (choice === 'rock') return <FaHandRock  className='text-2xl'/>
    if (choice === 'paper') return <FaHandPaper className='text-2xl'/>
    else return <FaHandScissors className='text-2xl'/>
  }

  return (
    <section className='main-content flex flex-col'>
      <div className='flex justify-evenly items-center h-full pt-28'>
        <button onClick={result === '' ? () => setUserChoice('rock') : undefined}
                className="bg-button rounded-full border hover:bg-violet hover:text-white h-fit p-10"
        >
          <FaHandRock className='text-3xl'/>
        </button>
        <button onClick={result === '' ? () => setUserChoice('paper') : undefined}
                className="bg-button rounded-full border hover:bg-violet hover:text-white h-fit p-10"
        >
          <FaHandPaper className='text-3xl'/>
        </button>
        <button onClick={result === '' ? () => setUserChoice('scissors') : undefined}
                className="bg-button rounded-full border hover:bg-violet hover:text-white h-fit p-10"
        >
          <FaHandScissors className='text-3xl'/>
        </button>
      </div>
      <div className='flex justify-center py-20 font-medium'>
        <div className='icono'>
          {
            result && (
              displayIcon(userChoice)
            )
          }
        </div>
        <div>
          {
            loading && (
              <BiLoaderAlt className='animate-spin'/>
            )
          }
          {
            result && (
              <p>vs</p>
            )
          }
        </div>
        <div className='icono'>
          {
            result && (
              displayIcon(computerChoice)
            )
          }
        </div>
      </div>
      <div className='flex justify-evenly py-12'>
        {
          result && (
            <div className='flex flex-col justify-center'>
              <p className='font-medium text-xl'>{result}</p>
              <button className='py-2 text-body-color text-base mt-1 hover:text-hover transition'
                      onClick={playAgain}
              >
                Jugar otra vez
              </button>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Utility