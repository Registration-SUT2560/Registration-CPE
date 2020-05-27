export const mutations = {
    setLoggedIn(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    },
    setSchoolYear (state, payload) {
        state.schoolYear = payload
    },
    setLoading (state, payload) {
        state.loading = payload
    },
    setError (state, payload) {
        state.error = payload
    },
    setStudyYear (state, payload) {
        state.studyYear = payload
    },
    createNotice (state, payload){
        state.noticeState = payload
       
    }
}