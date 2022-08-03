import {createClient} from '../../plugins/contentful';
const contentfulClient = createClient();

export const state = {
  navItems: null
};

export const mutations = {
  setMenuItems(state, data) {
    state.navItems = data;
  }
};

export const actions = {
  getPageItems({ commit }) {
    console.log('here')
    contentfulClient.getEntries({
      content_type: "navigation",
      order: "-sys.createdAt"
    }).then((page) => {
      if(page) {
        let navItems = page.items[0].fields;
        commit('setMenuItems', navItems);
      }
    }).catch((err) => {
      console.log("error", err);
    });
  }
};

export default {
  state,
  mutations,
  actions,
};
