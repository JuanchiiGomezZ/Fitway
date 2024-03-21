import { createTheme } from "@shopify/restyle";
import { colors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";
import { sizes } from "./tokens/sizes";
import { borderRadius as borderRadii } from "./tokens/borderRadius";

const theme = createTheme({
  colors,
  spacing,
  sizes,
  borderRadii,
});

export type ThemeProps = typeof theme;
export { theme };
