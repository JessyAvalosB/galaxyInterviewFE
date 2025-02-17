import {
    AppBar,
    Toolbar,
    Typography
} from "@mui/material"

export interface NavBarProps {
    pageTitle: string;  // Título de la página actual
}

const NavBar = ({ pageTitle }: NavBarProps) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {pageTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
