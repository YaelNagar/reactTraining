import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

interface AlertMessageProps {
    message: string;
    severityType: "success" | "error" | "warning" | "info"
}

const AlertMessage = (props: AlertMessageProps) => {
    const [alertOpen, setAlertOpen] = useState<boolean>(true);

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
            <Alert severity={props.severityType}>{props.message}</Alert>
        </Snackbar>
    );
};
export default AlertMessage;