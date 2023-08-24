import Button from "@mui/material/Button";

const ButtonMui = () => {
    return (
        <div className="container">
            <Button variant="text" color="primary">
                Dev1
            </Button>
            <Button variant="contained" color="secondary">
                Dev2
            </Button>
            <Button variant="disabled" color="danger">
                Dev3
            </Button>
        </div>
    );
};

export default ButtonMui;
