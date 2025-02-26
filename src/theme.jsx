import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: "#ffffff"
        },
        primary: {
            main: "#026aa7" // Trello Blue のような色
        },
        secondary: {
            main: "#dfe3e6" // ソフトなグレー
        },
        text: {
            primary: "#172b4d",
            secondary: "#6b778c"
        }
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        h4: {
            fontWeight: 500,
            marginBottom: "1rem"
        },
        body1: {
            lineHeight: 1.6
        }
    },
    shape: {
        borderRadius: 4 // シンプルな角丸
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0 1px 3px rgba(0,0,0,0.12)", // 軽いシャドウ
                    border: "1px solid #dfe3e6",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                        transform: "scale(1.02)"
                    }
                }
            }
        }
    }
});

export default theme;
