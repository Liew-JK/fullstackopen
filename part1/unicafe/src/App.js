import { useState } from 'react'

const StatisticLine = ({text, value,unit}) =>
<tr>
  <td>{text}</td> 
  <td>{value}{unit}</td>
</tr>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.label}
    </button>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good) / total * 100

  if (total <= 0){
    return(
      <p>No feedback given</p>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive} unit='%'/>
      </tbody>
    </table>
    
  )
}
  



// const Button =  ({ handleClick, label}) => <button onClick={handleClick}>{label}</button>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} label='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} label='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} label='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App