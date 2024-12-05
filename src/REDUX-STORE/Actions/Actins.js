export const Box_Values = (val) => ({
    type: 'boxValue',
    payload: val,
  });
  
  export const Histery = (val) => ({
    type: 'histery',
    payload: val,
  });
  export const reset = () => ({
    type: 'reset',
  });

  export const amount = (val) => ({
    type: 'amount',
    payload:val
    
  });
  export const remove = (val) => ({
    type: 'remove',
    payload:val
    
  });