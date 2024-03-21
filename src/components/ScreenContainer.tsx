import Box from "@/theme/components/Box";
import { BoxProps } from "@shopify/restyle";
import { ThemeProps } from "@/theme";

interface ScreenContainerProps extends BoxProps<ThemeProps> {
  children: React.ReactNode;
}
const ScreenContainer = ({ children, ...props }: ScreenContainerProps) => {
  return (
    <Box flex={1} px="space5" pt="spaceStatusBar" bg="background" {...props}>
      {children}
    </Box>
  );
};

export default ScreenContainer;
