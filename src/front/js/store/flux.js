const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pc9: [],
      waist: [],
      length: [],
    },
    actions: {
      addPc9: (data) => {
        const store = getStore();
        setStore({ pc9: [data] });
      },
      addWaist: (data) => {
        const store = getStore();
        setStore({ waist: [data] });
      },
      addLength: (data) => {
        const store = getStore();
        setStore({ length: [data] });
      },
      addHip: (data) => {
        const store = getStore();
        setStore({ hip: data })
      },
      addPc9Match: (data) => {
        const store = getStore();
        setStore({ pc9Match: data})
      }
    },
  };
};

export default getState;
