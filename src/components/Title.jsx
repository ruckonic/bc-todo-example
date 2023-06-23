
// eslint-disable-next-line react/prop-types
export function Title({children})  {
  if (!children) {
    throw new Error('Title component must have children')
  }

  return <h1 className='title'>{children}</h1>
}

export default Title