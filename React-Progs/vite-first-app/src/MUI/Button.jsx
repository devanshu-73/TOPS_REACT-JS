import * as MUI from '@material-ui/core';
import React from 'react';

const ButtonMui = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className='container'>
            <MUI.Button variant="contained">Default-Dev</MUI.Button>
            <MUI.Button variant="contained" color="primary">
                Dev-1
            </MUI.Button>
            <MUI.Button variant="contained" color="secondary">
                Dev-2
            </MUI.Button>
            <MUI.Button variant="contained" disabled>
                Disabled-Dev------
            </MUI.Button>
            <MUI.Button variant="contained" color="primary" href="#contained-buttons">
                Link-Dev
            </MUI.Button>
            <hr /><hr />

            <MUI.Card sx={{ maxWidth: 345 }}>
                <MUI.CardHeader
                    avatar={
                        <MUI.Avatar sx={{ bgcolor: MUI.red[500] }} aria-label="recipe">
                            R
                        </MUI.Avatar>
                    }
                    action={
                        <MUI.IconButton aria-label="settings">
                            <MUI.Icons.MoreVertIcon />
                        </MUI.IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <MUI.CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <MUI.CardContent>
                    <MUI.Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </MUI.Typography>
                </MUI.CardContent>
                <MUI.CardActions disableSpacing>
                    <MUI.IconButton aria-label="add to favorites">
                        <MUI.Icons.FavoriteIcon />
                    </MUI.IconButton>
                    <MUI.IconButton aria-label="share">
                        <MUI.Icons.ShareIcon />
                    </MUI.IconButton>
                    <MUI.IconButton
                        aria-label="show more"
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                    >
                        <MUI.Icons.ExpandMoreIcon />
                    </MUI.IconButton>
                </MUI.CardActions>
                <MUI.Collapse in={expanded} timeout="auto" unmountOnExit>
                    <MUI.CardContent>
                        <MUI.Typography paragraph>Method:</MUI.Typography>
                        <MUI.Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </MUI.Typography>
                        {/* ... (rest of the content) */}
                    </MUI.CardContent>
                </MUI.Collapse>
            </MUI.Card>
        </div>


    )
}

export default ButtonMui
