import React, { useState } from 'react'
import { Button, Box, Typography } from '@material-ui/core';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { keylist } from '../static/keylist';

const Header = () => {

    const displaySelectedKey = useStoreState(state => state.currentSelectedKey);
    const setCurrentKey = useStoreActions(actions => actions.changeCurrentKey);

    const buttonOnClick = (e) => {
        const location = { 0: "", 1: "Left", 2: "Right", 3: "Numpad" };
        const key =
            `${e.location === 0 ? "" : (location[e.location] + " ")}${e.location === 0 ? (e.key.toUpperCase()) : (e.key)}`;
        let keyCode = keylist.find(({ keyName }) => keyName.includes(e.code)).key;
        setCurrentKey({ key, keyCode });
    }

    return (
        <div>
            <Typography variant='h3' component='div'>
                <Box fontWeight={500} textAlign="center" my={2}>
                    CSGO Bind
                </Box>
            </Typography>

            <Typography component='div'>
                <Box align='center'>
                    <Box component='div'>Currently setting binds for</Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        size='small'
                        onKeyDown={(e) => buttonOnClick(e.nativeEvent)}
                    >
                        {displaySelectedKey}
                    </Button>
                </Box>
            </Typography>
        </div>
    )
}

export default Header