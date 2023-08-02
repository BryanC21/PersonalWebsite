import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Myself from './resources/Myself.jpg';

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
                            <a href={process.env.PUBLIC_URL + '/BryanCalderaResume.pdf'} target="_blank" rel="noreferrer">Resume</a>
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
                            <Link href="https://github.com/BryanC21/">GitHub</Link>
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
                        <Typography variant="h3" sx={{ my: 4 }}>
                            <Link href="https://www.linkedin.com/in/bryancaldera/">LinkedIn</Link>
                        </Typography>
                        <Typography variant="h3" sx={{ my: 4 }}>
                            <Link href="mailto:bryanicaldera@gmail.com">bryanicaldera@gmail.com</Link>
                        </Typography>

                    </Box>

                </Container>

            </ThemeProvider>
        </div>


    );
}

export default MainPage;