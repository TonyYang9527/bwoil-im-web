import {observable, action} from 'mobx';

const theme = observable({
    width: 1000,
    height: 658,
    left: 100,
    top: 100,
    background: '#F9F9F9'
});

const settingTheme = action((width, height, left, top, background) => {
    theme.width = width;
    theme.height = height;
    theme.left = left;
    theme.top = top;
    theme.background = background;
    console.log(JSON.stringify(theme));
});

export {theme, settingTheme};