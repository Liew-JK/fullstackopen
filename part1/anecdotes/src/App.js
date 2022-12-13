import { useState } from 'react'


const ButLogic = ({aryData, value, handleClick}) =>{
  const size = aryData.length;

  if (value >= size - 1){
    return(
      <button onClick={() => handleClick(0)}>back to first anexdote</button>
    )
  }

  return(
    <button onClick={() => handleClick(value + 1)}>next anexdote</button>
  )
}

const MaxVote = ({aryData, val}) => {
  const maxPost = val.indexOf(Math.max(...val))
  if (maxPost === -1){
    return (
      <>
        No most Anecdote found
      </>
    )
  }
  else{
    return(
      <>
        {aryData[maxPost]}
      </>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]   
  
  const points = Array.from({ length: anecdotes.length }, () =>  {return 0})

  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(points)

  const incrementNumber = index => {
    setVoted(existingItems => {
      return [
        ...existingItems.slice(0, index),
        existingItems[index] + 1,
        ...existingItems.slice(index + 1),
      ]
    })
  }
  
  return (
    <div>
      <div>
        <h1>Anexdote of the day</h1>
        {anecdotes[selected]} 
      </div>
      <div>        
        has {voted[selected]} votes
      </div>
      <div>
        <button onClick={() => incrementNumber(selected)}>vote</button>
        <ButLogic aryData={anecdotes} value={selected} handleClick={setSelected}   />
      </div>
      <div>
        <h1>Anexdote with most votes</h1>
        <MaxVote aryData={anecdotes} val={voted} />
      </div>
    </div>
  )
}

export default App
