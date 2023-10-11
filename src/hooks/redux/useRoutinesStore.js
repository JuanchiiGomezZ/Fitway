import {
  saveRoutines,
  onChecking,
  onError,
  saveActiveRoutineId,
  saveActiveRoutineDetails,
  setLoader,
  saveActiveRoutineWorkouts,
} from "../../store/slices/routinesSlice";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import API_URL from "../../helpers/API_URL";

export default useRoutinesStore = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { userRoutines, activeRoutineId } = useSelector((state) => state.userRoutines);
  const { activeRoutine, disabledRoutines } = userRoutines;

  const getUserRoutines = async () => {
    try {
      dispatch(onChecking());
      const { data } = await axios.get(`${API_URL}/routine/allRoutines/${user.id}`);
      dispatch(saveActiveRoutineId(data[0]?.activeRoutine?.id));
      dispatch(saveRoutines(data[0]));
      dispatch(setLoader());
    } catch (error) {
      console.log(error);
      dispatch(onError(error.response.data?.message));
    }
  };

  const createNewRoutine = async (newRoutineData) => {
    try {
      const { data } = await axios.post(`${API_URL}/routine/newRoutine/${user.id}`, newRoutineData);
      dispatch(
        saveRoutines({
          ...userRoutines,
          disabledRoutines: [...disabledRoutines, data],
        }),
      );
    } catch (error) {
      dispatch(onError(error.response.data?.message));
    }
  };

  const deleteUserRoutine = async (routineId) => {
    try {
      const { data } = await axios.delete(`${API_URL}/routine/delete/${routineId}`);
      const updatedRoutines = userRoutines.disabledRoutines.filter(
        (element) => element.id !== routineId,
      );
      dispatch(
        saveRoutines({
          activeRoutine,
          disabledRoutines: updatedRoutines,
        }),
      );
    } catch (error) {
      console.log(error);
      dispatch(onError(error.response.data?.message));
    }
  };

  const toggleActiveRoutine = async (routineId, isActive) => {
    try {
      const { data } = await axios.patch(
        `${API_URL}/routine/activeRoutine/${user.id}/${routineId}`,
        { isActive },
      );
      const updateDisabledRoutine = disabledRoutines.filter((element) => element.id !== routineId);
      if (!activeRoutine && isActive) {
        dispatch(
          saveRoutines({
            activeRoutine: data,
            disabledRoutines: [...updateDisabledRoutine],
          }),
        );
        dispatch(saveActiveRoutineId(routineId));
      } else if (isActive) {
        dispatch(
          saveRoutines({
            activeRoutine: data,
            disabledRoutines: [...updateDisabledRoutine, activeRoutine],
          }),
        );
        dispatch(saveActiveRoutineId(routineId));
      } else {
        dispatch(
          saveRoutines({
            activeRoutine: null,
            disabledRoutines: [...disabledRoutines, data],
          }),
        );
        dispatch(saveActiveRoutineId(null));
      }
    } catch (error) {
      dispatch(onError(error.response.data?.message));
    }
  };

  const getUserRoutineDetail = async () => {
    dispatch(onChecking());
    try {
      const [workoutsResponse, routineResponse] = await Promise.all([
        axios.get(`${API_URL}/workout/allWorkouts/${activeRoutineId}`),
        axios.get(`${API_URL}/routine/${activeRoutineId}`),
      ]);
      dispatch(saveActiveRoutineWorkouts(workoutsResponse.data));
      dispatch(saveActiveRoutineDetails(routineResponse.data));
      dispatch(setLoader());
    } catch (error) {
      dispatch(onError(error.response.data?.message));
    }
  };

  const getRoutines = async (routineId) => {
    try {
      dispatch(onChecking());
      if (!routineId) {
        const userRoutinesResponse = await axios.get(`${API_URL}/routine/allRoutines/${user.id}`);
        const userRoutinesData = userRoutinesResponse.data;
        dispatch(
          saveActiveRoutineId(
            !userRoutinesData[0]?.activeRoutine?.id ? null : userRoutinesData[0]?.activeRoutine?.id,
          ),
        );
        dispatch(saveRoutines(userRoutinesData[0]));
      } else {
        const [routineResponse, workoutsResponse] = await Promise.all([
          axios.get(`${API_URL}/routine/${routineId}`),
          axios.get(`${API_URL}/workout/allWorkouts/${routineId}`),
        ]);
        dispatch(saveActiveRoutineDetails(routineResponse.data));
        dispatch(saveActiveRoutineWorkouts(workoutsResponse.data));
      }
      dispatch(setLoader());
    } catch (error) {
      console.log(error);
      dispatch(onError(error.response.data?.message));
    }
  };

  return {
    getUserRoutines,
    createNewRoutine,
    deleteUserRoutine,
    toggleActiveRoutine,
    getUserRoutineDetail,
    getRoutines,
  };
};
