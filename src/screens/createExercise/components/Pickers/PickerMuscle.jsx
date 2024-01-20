import PickerModal from "./PickerModal";
import muscles from "../../../../data/muscles.json";

export default PickerMuscle = () => {
  return <PickerModal data={muscles} title={"Muscles"} />;
};
