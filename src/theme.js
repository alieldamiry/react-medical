import { createMuiTheme } from "@material-ui/core"

export default createMuiTheme({
    palette: {
        primary: {
            main: '#3F72AF'
        },
    },
    overrides: {
        MuiToolbar: {
            root: {
                flexWrap: 'wrap'
            }
        },
        typography:{
            fontSize:'150%'
        }
        // BottomNavigationActionLabel: {
        //     label: {
        //         root: {
        //             fontSize: '2rem'
        //         }
        //     }
        // }
    }
})
