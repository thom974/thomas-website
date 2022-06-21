import {
    Stack, Typography
} from '@mui/material'

const About = () => {
    return (
        <Stack 
            className='scroll-snap-child'
            width='100%'
            height='100%'
            justifyContent='center'
            alignItems='center'
        >
            <Typography>sample text: about</Typography>
        </Stack>
    )
}

export default About