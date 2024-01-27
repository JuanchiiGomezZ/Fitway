import {
  saveRoutines,
  onChecking,
  onError,
  saveActiveRoutineId,
  saveActiveRoutineDetails,
  setLoader,
  saveActiveRoutineWorkouts,
} from "../../store/slices/routinesSlice";

import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";

export default useRoutinesStore = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { userRoutines, activeRoutineId } = useSelector((state) => state.userRoutines);
  const { activeRoutine, disabledRoutines } = userRoutines;

  const getUserRoutines = async () => {
    try {
      dispatch(onChecking());
      const { data } = await axios.get(`/routine/allRoutines/${user.id}`);

      dispatch(saveActiveRoutineId(data[0]?.activeRoutine?.id));
      dispatch(saveRoutines(data[0]));
      dispatch(setLoader());
    } catch (error) {
      console.log(error);
      dispatch(onError(error.response.data));
    }
  };

  const createNewRoutine = async (newRoutineData) => {
    try {
      const { data } = await axios.post(`/routine/newRoutine/${user.id}`, newRoutineData);
      console.log(data);
      dispatch(
        saveRoutines({
          ...userRoutines,
          disabledRoutines: [...disabledRoutines, { ...data, workoutCount: 0 }],
        }),
      );
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  const deleteUserRoutine = async (routineId) => {
    try {
      const { data } = await axios.delete(`/routine/delete/${routineId}`);
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
      dispatch(onError(error.response.data));
    }
  };

  const toggleActiveRoutine = async (routineId, isActive) => {
    try {
      const { data } = await axios.patch(`/routine/activeRoutine/${user.id}/${routineId}`, {
        isActive,
      });
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
      dispatch(onError(error.response.data));
    }
  };

  const getUserRoutineDetail = async () => {
    dispatch(onChecking());
    try {
      const [workoutsResponse, routineResponse] = await Promise.all([
        axios.get(`/workout/show-all-in-routine/${activeRoutineId}`),
        axios.get(`/routine/${activeRoutineId}`),
      ]);
      dispatch(saveActiveRoutineWorkouts(workoutsResponse.data));
      dispatch(saveActiveRoutineDetails(routineResponse.data));
      dispatch(setLoader());
    } catch (error) {
      dispatch(onError(error.response.data));
    }
  };

  const getRoutines = async (routineId) => {
    try {
      dispatch(onChecking());
      if (!routineId) {
        const { data } = await axios.get(`/routine/allRoutines/${user.id}`);
        dispatch(
          saveActiveRoutineId(!data[0]?.activeRoutine?.id ? null : data[0]?.activeRoutine?.id),
        );
        dispatch(saveRoutines(data[0]));
      } else {
        const [routineResponse, workoutsResponse] = await Promise.all([
          axios.get(`/routine/${routineId}`),
          axios.get(`/workout/show-all-in-routine/${routineId}`),
        ]);
        dispatch(saveActiveRoutineDetails(routineResponse.data));
        dispatch(saveActiveRoutineWorkouts(workoutsResponse.data));
      }
      dispatch(setLoader());
    } catch (error) {
      console.log(error);
      dispatch(onError(error.response.data));
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
