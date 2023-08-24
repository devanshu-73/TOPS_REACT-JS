import * as MUI from '@material-ui/core';
const ButtonMui = () => {

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

      
        </div>


    )
}

export default ButtonMui
