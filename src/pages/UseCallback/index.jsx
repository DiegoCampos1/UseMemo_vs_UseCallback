import React, {useEffect, useState, useCallback} from 'react';

const Button = ({...props}) => {

  useEffect(() => {
    console.log("Componente Button sofre um re-render")
  })

  useEffect(() => {
    // Quando fazemos um re-render tudo que está dentro do componente é recriado, no nosso caso inclusive a função onClick
    // Para evitar esse comportamento podemos usar o useCallback, vai manter a igualdade referencial entre as renderizações
    console.log("Button: FUNÇÃO ONCLICK MUDOU")
  },[props.onClick])

  return <button{...props}>Increment</button>
}

function UseCallback() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Componente UseCallback sofre um re-render")
  },)

  return (
    <div>
      <h3>UseCallback: </h3>
      <div>count: {count}</div>
      {/* <Button onClick={()=> setCount(prev => prev+1)}></Button> */}
      <Button onClick={useCallback(()=> setCount(prev => prev+1), [])}></Button>
    </div>
  )
}

export default UseCallback
