import React, { useState } from "react";

import { SearchInput } from "../../../../components/Inputs";
import { useTranslation } from "react-i18next";


export default SearchBar = () => {
  const [querySearch, setQerySearch] = useState("");
  const { t } = useTranslation();

  return (
      <SearchInput
        placeholder={t("global.search") + "..."}
        inputChange={querySearch}
        setInputChange={setQerySearch}
      />
  );
};


