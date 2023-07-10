import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const iconStyle = {
    fontSize:"48px",
}

export const ServiceInformation = [
    {
        icon: <LocalShippingIcon sx={iconStyle}/>,
        title: "Free Delivery",
        description: "Get free delivery for every order above $20"
    },
    {
        icon:<KeyboardReturnIcon sx={iconStyle}/>,
        title: "90 Days Return",
        description: "Return within 90 days of receiving your order"
    },
    {
        icon:<PaymentIcon sx={iconStyle}/>,
        title: "Secure Payment",
        description: "100% secure payment. Get easy support anytime"
    },
    {
        icon:<SupportAgentIcon sx={iconStyle}/>,
        title: "24/7 Online Support",
        description: "Dedicated support anytime and anywhere"
    },
]