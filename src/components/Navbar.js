import Stack from "@mui/material/Stack"
import { 
    Typography 
} from "@mui/material"

const Navbar = () => {
    return (
        <Stack justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={2}>
                <Typography variant="navbar_main">home</Typography>
                <Typography variant="navbar_alt">/</Typography>
                <Typography variant="navbar_main">about me</Typography>
                <Typography variant="navbar_alt">/</Typography>
                <Typography variant="navbar_main">projects</Typography>
            </Stack>
        </Stack>
    )
}

export default Navbar