import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

const AlertMessage = () => {
    const [alertOpen, setAlertOpen] = useState(true);

    setTimeout(() => {
        setAlertOpen(false);
    }, 2000);

    return (
        <Snackbar
            open={alertOpen}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={() => setAlertOpen(false)}
        >
            <Alert severity="success">פריט נוסף בהצלחה</Alert>
        </Snackbar>
    );
};
export default AlertMessage;