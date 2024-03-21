const fontWeights = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
};

const fontFamilies = {
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  semiBold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  extraBold: "Inter_800ExtraBold",
  fugazOne: "FugazOne_400Regular",
};

export const textVariants = {
  defaults: {
    color: "text",
  },
  headingXXL: {
    fontSize: 35,
    fontFamily: fontFamilies.extraBold,
  },
  headingXL: {
    fontSize: 30,
    fontFamily: fontFamilies.extraBold,
  },
  headingL: {
    //Heading for secondaries screens or subtitles on main screens
    fontSize: 25,
    fontFamily: fontFamilies.extraBold,
  },
  headingM: {
    //Heading for cards
    fontSize: 22,
    fontFamily: fontFamilies.bold,
  },
  headingS: {
    // Heading for small cards
    fontSize: 20,
    fontFamily: fontFamilies.medium,
  },

  bodyLSemiBold: {
    fontSize: 18,
    fontFamily: fontFamilies.semiBold,
  },
  bodyLMedium: {
    fontSize: 18,
    fontFamily: fontFamilies.medium,
  },
  bodyLRegular: {
    fontSize: 18,
    fontFamily: fontFamilies.regular,
  },

  bodyMMedium: {
    fontSize: 16,
    fontFamily: fontFamilies.medium,
  },
  bodyMRegular: {
    fontSize: 16,
    fontFamily: fontFamilies.regular,
  },

  bodySMedium: {
    fontSize: 14,
    fontFamily: fontFamilies.medium,
  },
  bodySRegular: {
    fontSize: 14,
    fontFamily: fontFamilies.regular,
  },

  headingXXLSecondary: {
    fontSize: 50,
    fontFamily: fontFamilies.fugazOne,
  },
  headingXLSecondary: {
    fontSize: 40,
    fontFamily: fontFamilies.fugazOne,
  },
  headingLSecondary: {
    fontSize: 31,
    fontFamily: fontFamilies.fugazOne,
  },
  headingMSecondary: {
    fontSize: 21,
    fontFamily: fontFamilies.fugazOne,
  },
  bodyMSecondary: {
    fontSize: 18,
    fontFamily: fontFamilies.fugazOne,
  },
};
