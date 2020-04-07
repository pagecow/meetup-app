import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ff5252',
            main: '#ff1744',
            dark: '#d50000'
        },
        secondary: {
            light: '#757575',
            main: '#616161',
            dark: '#424242'
        }
    },
    status: {
        danger: "orange"
    }
})

export default theme;