import { useTheme, Box, Typography } from "@mui/material";
import { shades } from "../../theme";
const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0 " backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            marginBottom="30px"
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            aliquid dolorum voluptatem molestias deserunt aliquam, odit sunt
            voluptates reprehenderit voluptatum neque quod exercitationem soluta
            quam corporis totam ducimus omnis! Et?
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" marginBottom="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" marginBottom="30px">
            Custumer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corparate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" marginBottom="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 north Whatevetr Blvd, Washington, DC 10501
          </Typography>
          <Typography mb="30px">Email: chouelakevin@gmail.com</Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
