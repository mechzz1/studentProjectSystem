import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blue, green, yellow, purple } from '@mui/material/colors';
import styles from "./addCard.module.css"
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import dateFormat, { masks } from "dateformat";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const getRandomColor = () => {
    const colors = [red[500], blue[500], green[500], yellow[500], purple[500]];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
function card(props) {
    const [expanded, setExpanded] = React.useState(false);
    const randomBgColor = getRandomColor();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const dateObj = new Date(props.startDate);

        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }, []);
    return (
        <Card sx={{ maxWidth: 345 }} key={props.id}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: randomBgColor }} aria-label="recipe">
                        {props.title.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                    </IconButton>
                }
                title={props.title}
                subheader={dateFormat(`${props.startDate}`, "mediumDate")}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" 
                
                className={ `${styles.cardBg} ${props.phase === "development" ? styles.development : props.phase === "design" ? styles.design
                : props.phase === "testing" ? styles.testing : props.phase === "deployment" ? styles.deployment : props.phase === "completed" ? styles.completed
                :""}` } >
                    {props.phase.charAt(0).toUpperCase() + props.phase.slice(1)}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>



            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    End Date {">>"}
                    {dateFormat(`${props.endDate}`, "mediumDate")}
                </Typography>
            </CardContent>


        </Card>
    )
}

export default card