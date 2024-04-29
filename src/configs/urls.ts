const urls = {
  characters:{
    getAll:'/characters',
    getById:(id:string | number):string => `/characters/${id}` 
  },
  comics:{
    getAll:'/comics',
    getById:(id:string | number):string => `/comics/${id}`
  }
};

export {urls};