import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
        <ListItem key={"home"} disablePadding>
            <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Home page"} />
            </ListItemButton>
        </ListItem>
        <ListItem key={"alimentacao"} disablePadding>
            <ListItemButton component={Link} to="/alimentacao">
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Alimentação"} />
            </ListItemButton>
        </ListItem>
        <ListItem key={"vestimenta"} disablePadding>
            <ListItemButton component={Link} to="/vestimenta">
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Vestimenta"} />
            </ListItemButton>
        </ListItem>
        <ListItem key={"eletronicos"} disablePadding>
            <ListItemButton component={Link} to="/eletronicos">
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Eletrônicos"} />
            </ListItemButton>
        </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem key={"total"} disablePadding>
            <ListItemButton component={Link} to="/total">
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Total"} />
            </ListItemButton>
        </ListItem>
        </List>
    </Box>
    );

    return (
        <div>
        <Button onClick={toggleDrawer(true)}><FormatListBulletedIcon/> </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
        </div>
    );
}
