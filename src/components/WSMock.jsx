import { useMemo } from 'react'
// No indaguen en este código, es solo para simular un socket
export function WsMock() {
  const ws = useMemo(() => {
    const ev = new Event('message')
    window.ws = {
      addEventListener: (type, cb) => { 
        if (type === 'message') {
          return window.addEventListener('message', cb)
          
        }
      },
      removeEventListener(type, listener) {
        window.removeEventListener(type, listener)
      }
    }
    
    return ev
    }, [])
  
    return <button onClick={() => {
      const id = crypto.randomUUID()
      ws.data = { id, title: `Hola ${id}`, completed: false }
  
      window.dispatchEvent(ws)
    }}>Send Mock Socket Message</button>
  }