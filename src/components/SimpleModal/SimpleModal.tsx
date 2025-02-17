import {
    Modal,
    Box,
    Typography,
} from "@mui/material";

export interface SimpleModalProps {
    header: string;
    children: React.ReactNode;
    isOpen: boolean;
}

const SimpleModal = ({ header, children, isOpen = false }: SimpleModalProps) => {
    return (
        <Modal open={isOpen}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    width: 400,
                    height: '90%',
                    margin: '20px auto',
                    borderRadius: 2,
                    overflow: 'scroll',
                }}
            >
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    {header}
                </Typography>
                {children}
            </Box>
        </Modal>
    )
}

export default SimpleModal
