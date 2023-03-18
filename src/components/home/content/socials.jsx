import React from 'react';
import IconButton from '@mui/material/IconButton';
// wanted to use mui icons, but its sorta incomplete, I take L
function Socials() {
    const socialIcons = [
        (<ion-icon name="logo-linkedin" class="icon"/>),
        (<ion-icon name="logo-github" class="icon" />),
        (<ion-icon name="logo-twitter" class="icon" />),
        (<ion-icon name="logo-instagram" class="icon" />),
        (<ion-icon name="logo-discord" class="icon" />),
        (<ion-icon name="logo-twitch" class="icon" />) 
    ];
    const socialLinks = [
        'https://www.linkedin.com/in/jialin-li-22461b260/',
        'https://github.com/rangedminionotp',
        'https://twitter.com/nannersowo',
        'https://www.instagram.com/nannersowo/',
        'https://discord.gg/AKh6mfM',
        'https://www.twitch.tv/nannersowo'
    ];
    const handleClick = (e) => {
        window.open(e.currentTarget.id);
    };
    return (
        <div>
            {socialIcons.map((text, index)=> (
                <div class='socialIcons'>
                <IconButton
                id={socialLinks[index]}
                aria-label={text}
                onClick={(e)=>handleClick(e)}>
                    {text} 
                </IconButton>
                </div>
            ))}
        </div>
    );
};

export default Socials;
