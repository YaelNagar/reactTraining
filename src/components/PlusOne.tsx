import { Box } from "@mui/material";

const PlusOne = () => {

    return (
        <>
            <Box color="primary.main"
                sx={{
                    position: "absolute",
                    bottom: "50%",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    borderRadius: "50%",
                    width: "2rem",
                    height: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: "bold",
                    animation: "floatUpDown 1.5s ease-in-out forwards",
                }}
            >
                +1
            </Box>
            <style>
                {`
        @keyframes floatUpDown {
            0% { opacity: 1; transform: translate(-50%, 0); }
            30% { opacity: 1; transform: translate(-50%, -30px); } 
            100% { opacity: 0; transform: translate(-50%, 0); } 
        }
    `}
            </style>
        </>
    );
};
export default PlusOne;