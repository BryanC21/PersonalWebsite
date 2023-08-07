import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Myself from './resources/Myself.jpg';
import { Button } from '@mui/material';

function MainPage() {

    useEffect(() => {
        document.title = 'Portfolio';
    }, []);

    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <div>
            <Navbar />
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Container id="home"
                    sx={() => ({
                        position: 'relative',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        py: 10,
                        gap: 5,
                    })}
                >
                    <Box sx={{ textAlign: 'center', width: '50%' }}>
                        <Typography variant="h1" sx={{ my: 2 }}>
                            Bryan Caldera
                        </Typography>
                        <Typography variant="h4" sx={{ my: 2 }}>
                            MS Software Engineering student at San Jose State University
                        </Typography>
                        <Typography variant="h4" sx={{ my: 2 }}>
                            Specialization in Cloud and Mobile Computing
                        </Typography>
                        <Typography variant="h2" sx={{ my: 2 }}>
                            <Button variant="contained" size="large" href={process.env.PUBLIC_URL + '/BryanCalderaResume.pdf'} target="_blank" rel="noreferrer"><Typography variant="h4" sx={{ my: 0 }}>Resume</Typography></Button>
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', width: '50%' }}>
                        <img src={Myself} alt="Profile Pic" width="50%" height="50%" />
                    </Box>

                </Container>

                <Container id="projects"
                    sx={() => ({
                        position: 'relative',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                    })}
                >

                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <Typography variant="h1" sx={{ my: 5 }}>
                            Projects
                        </Typography>
                        <Typography variant="h1" sx={{ my: 5 }}>
                            <Button variant="contained" size="large" href="https://github.com/BryanC21/"><Typography variant="h5" sx={{ my: 0 }}>GitHub</Typography></Button>
                        </Typography>

                    </Box>

                </Container>

                <Container id="contact"
                    sx={() => ({
                        position: 'relative',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                    })}
                >

                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <Typography variant="h1" sx={{ my: 6 }}>
                            Contact
                        </Typography>
                        <Typography variant="h3" sx={{ my: 0 }}>
                            <Button variant="contained" size="large" href="https://www.linkedin.com/in/bryancaldera/"><Typography variant="h5" sx={{ my: 0 }}>LinkedIn</Typography></Button>
                        </Typography>
                        <Typography variant="h3" sx={{ my: 4 }}>
                            <Button variant="contained" size="large" href="mailto:bryanicaldera@gmail.com"><Typography variant="h5" sx={{ my: 0 }}>bryanicaldera@gmail.com</Typography></Button>
                        </Typography>

                    </Box>

                </Container>

            </ThemeProvider>
        </div>


    );
}

export default MainPage;