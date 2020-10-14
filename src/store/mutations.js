const getDefaultState = () => {
  return {
    user: null,
    schoolYear: new Date().getFullYear() + 543,
    loading: false,
    error: null,
    studyYear: null,
    noticeState: null,
    dialog: null,
  };
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setSchoolYear(state, payload) {
    state.schoolYear = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setStudyYear(state, payload) {
    state.studyYear = payload;
  },
  createNotice(state, payload) {
    state.noticeState = payload;
  },
  setDialog(state, payload) {
    state.dialog = payload;
  },
  setDrawer(state, payload) {
    state.drawer = payload;
  },
  logOut(state) {
    Object.assign(state, getDefaultState());
  },
};
