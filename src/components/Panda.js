import { useEffect } from 'react'

import PandaModel from '../classes/PandaModel'

const Panda = () => {
    useEffect(() => {
        const canvas = document.querySelector('canvas.webgl')
        
        const pandaModel = new PandaModel(canvas)

    })
    
    return (
        <canvas className='webgl' />
    )
}

export default Panda