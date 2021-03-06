import React, { useContext } from 'react';
import { AppBar, Button, ButtonGroup, Toolbar, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth';

interface Props {
    pages: Array<{ label: string; to: string }>;
}

const Nav = ({ pages }: Props) => {
    const { logoutUser, user, userData, loading } = useContext(AuthContext);
    if (loading) {
        return null;
    }

    const logout = () => {
        logoutUser();
    };

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                {!!user ? (
                    <Grid container justify="space-between" style={{ margin: '0 10% 0 10%' }}>
                        <Grid item>
                            <ButtonGroup
                                color="primary"
                                size="small"
                                aria-label="small contained button group"
                            >
                                {pages.map(button => (
                                    <Button
                                        key={button.label}
                                        color="secondary"
                                        component={Link}
                                        to={button.to}
                                    >
                                        <Typography color="secondary" variant="button">
                                            {button.label}
                                        </Typography>
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                <Grid
                                    item
                                    style={{
                                        paddingRight: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography color="secondary" variant="h5" noWrap>
                                        {userData ? 'Hi ' + userData.name : 'hello stranger'}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <ButtonGroup>
                                        <Button color="secondary" onClick={() => logout()}>
                                            <Typography color="secondary" variant="button">
                                                Logout
                                            </Typography>
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container justify="space-between" style={{ margin: '0 10% 0 10%' }}>
                        <Grid item>
                            <ButtonGroup
                                color="primary"
                                size="small"
                                aria-label="small contained button group"
                            >
                                <Button color="secondary" component={Link} to={'/'}>
                                    <Typography color="secondary" variant="button">
                                        Subjects
                                    </Typography>
                                </Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item>
                            <ButtonGroup>
                                <Button color="secondary" component={Link} to={'/login'}>
                                    <Typography color="secondary" variant="button">
                                        Login
                                    </Typography>
                                </Button>
                                <Button color="secondary" component={Link} to={'/register'}>
                                    <Typography color="secondary" variant="button">
                                        Register
                                    </Typography>
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
