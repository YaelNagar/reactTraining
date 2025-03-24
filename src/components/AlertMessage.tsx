import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { AlertMessageProps } from "../Types/AlertMessageProps";

const AlertMessage: React.FC<AlertMessageProps> = ({ message, severityType }) => {
    const [alertOpen, setAlertOpen] = useState(true);

    setTimeout(() => {
        setAlertOpen(false);
    }, 2000);

    return (
        <Snackbar
            open={alertOpen}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            onClose={() => setAlertOpen(false)}
        >
            <Alert severity={severityType}>{message}</Alert>
        </Snackbar>
    );
};
export default AlertMessage;