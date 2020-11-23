import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
    label: {
        fontSize: '40px'
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels>
            <BottomNavigationAction className={{ label: classes.label }} label="Recents" />
            <BottomNavigationAction className={classes.root} label="Favorites" />
            <BottomNavigationAction className={classes.root} label="Nearby" />
        </BottomNavigation>
    );
}