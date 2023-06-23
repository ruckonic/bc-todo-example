const fnDefault = () => { console.log("Hola el defecto") }

export function Button({ onClick = fnDefault, children, className, isCompleted }){ 
  
  const onClickButton = (e) => {
    onClick(e)
    console.log("aquí vamos a agregar analíticas isCompleted", isCompleted )
  }
  
  return <button type='button' onClick={onClickButton} children={children} className={className} />
}

export default Button