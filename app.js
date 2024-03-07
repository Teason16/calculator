import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'


const App = () => {
  const [expression, setExpression] = React.useState('')
  const [answer, setAnswer] = React.useState('0')
  
  const display = (symbol) => {
    setExpression(prev => prev + symbol)
    if(expression[expression.length - 1] === '=') {
      if(/[0-9]/.test(symbol)) {
        setExpression( symbol)
      } else {
        setExpression(answer + symbol)
      }
    }
  }
  
  const calculate = () => {
    setAnswer(eval(expression))
    setExpression((prev) => prev + '=')
  }
  
  const allClear = () => {
    setExpression('')
    setAnswer('0')
  }
  
  const clear = () => {
    setExpression(prev => prev.split('').slice(0, prev.length-1).join(''))
    setAnswer('0')
  }
  
  return (
  <div className="container">
      <div className="grid">
        <div className="screen">
          <input id="display" type="text" value={expression} placeholder="0" disabled></input>
          <div className="total">{answer}</div>
        </div>
        <div id="clear" className="padbtn red AC" onClick={allClear}>AC</div>
        <div className="padbtn red clear" onClick={clear}>C</div>
        <div id="divide" className="padbtn div" onClick={() => display('/')}>/</div>
        <div id="multiply" className="padbtn mult" onClick={() => display('*')}>x</div>
        <div id="seven"className="padbtn dark-grey seven" onClick={() => display('7')}>7</div>
        <div id="eight" className="padbtn dark-grey eight" onClick={() => display('8')}>8</div>
        <div id="nine" className="padbtn dark-grey nine" onClick={() => display('9')}>9</div>
        <div id="subtract" className="padbtn sub" onClick={() => display('-')}>-</div>
        <div id="four" className="padbtn dark-grey four" onClick={() => display('4')}>4</div>
        <div id="five" className="padbtn dark-grey five" onClick={() => display('5')}>5</div>
        <div id="six" className="padbtn dark-grey six" onClick={() => display('6')}>6</div>
        <div id="add" className="padbtn add" onClick={() => display('+')}>+</div>
        <div id="one" className="padbtn dark-grey one" onClick={() => display('1')}>1</div>
        <div id="two" className="padbtn dark-grey two" onClick={() => display('2')}>2</div>
        <div id="three" className="padbtn dark-grey three" onClick={() => display('3')}>3</div>
        <div id="equals" className="padbtn blue equals" onClick={calculate}>=</div>
        <div id="zero" className="padbtn dark-grey zero" onClick={() => display('0')}>0</div>
        <div id="decimal" className="padbtn dec dark-grey" onClick={() => display('.')}>.</div>
      </div>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
