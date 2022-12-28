import React from 'react';
import IconButton from '@mui/material/IconButton';

// wanted to use mui icons, but its sorta incomplete, I take L
function Socials() {
    const socialIcons = [
        (<ion-icon name="logo-twitter" class="icon" />),
        (<ion-icon name="logo-instagram" class="icon" />),
        (<ion-icon name="logo-discord" class="icon" />),
        (<ion-icon name="logo-twitch" class="icon" />),
        (<ion-icon name="logo-github" class="icon" />)
    ];
    const socialLinks = [
        'https://twitter.com/nannersowo',
        'https://www.instagram.com/nannersowo/',
        'https://discord.gg/AKh6mfM',
        'https://www.twitch.tv/nannersowo',
        'https://github.com/rangedminionotp'
    ];
    const handleClick = (e) => {
        window.open(e.currentTarget.id);
    };
    return (
        <div id='socialIcons'>
            {socialIcons.map((text, index)=> (
                <IconButton
                id={socialLinks[index]}
                aria-label={text}
                onClick={(e)=>handleClick(e)}>
                    {text}
                </IconButton>
            ))}
        </div>
    );
};

export default Socials;
