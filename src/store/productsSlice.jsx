import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id:1,  
      img: "https://images.unsplash.com/photo-1687645652864-fb57e8555d8b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Potato",
      cost: 5,
      quantity: 0,
      category: 'food',
    },
    {
      id:2,  
      img: "https://images.unsplash.com/photo-1597338684959-a73136a8be13?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tomato",
      cost: 2,
      quantity: 0,
      category: 'food',
    },
    {
      id:3,  
      img: "https://images.unsplash.com/photo-1575011016054-f3f0f3d4b7bb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "chilli",
      cost: 3,
      quantity: 0,
      category: 'food',
    },
    {
      id:4,  
      img: "https://images.unsplash.com/photo-1560951812-58e6bce53149?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "aubergine",
      cost: 5,
      quantity: 0,
      category: 'food',
    },
    {
      id:5,  
      img: "https://media.istockphoto.com/id/137215894/photo/chive-flowers.jpg?s=2048x2048&w=is&k=20&c=G2Bsle7fJPiZSCbC-86eRDOclDsauxHMIGKZ3pWeTTk=",
      name: "chives",
      cost: 5,
      quantity: 0,
      category: 'food',
    },
    {
      id:6,  
      img: "https://images.unsplash.com/photo-1714425396242-915d4093800a?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "onions",
      cost: 1,
      quantity: 0,
      category: 'food',
    },
    {
      id:7,  
      img: "https://images.unsplash.com/photo-1500420254515-0faefa2dac99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "basil",
      cost: 4,
      quantity: 0,
      category: 'herb',
    },
      {
      id:8,  
      img: "https://images.unsplash.com/photo-1591874001000-0be58073316f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "dill",
      cost: 1,
      quantity: 0,
      category: 'herb',
    },
      {
      id:9,  
      img: "https://images.unsplash.com/photo-1592380222497-0c40d4936b42?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "bay leaves",
      cost: 6,
      quantity: 0,
      category: 'herb',
    },
      {
      id:10,  
      img: "https://plus.unsplash.com/premium_photo-1677756430574-0a987a8f98c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "coriander",
      cost: 9,
      quantity: 0,
      category: 'herb',
    },
      {
      id:11,  
      img: "https://images.unsplash.com/photo-1588908933351-eeb8cd4c4521?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "mint",
      cost: 8,
      quantity: 0,
      category: 'herb',
    },
      {
      id:12,  
      img: "https://images.unsplash.com/photo-1607721098274-e54cbfab475d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "rosemary",
      cost: 7,
      quantity: 0,
      category: 'herb',
    },
    {
      id:13,  
      img: "https://images.unsplash.com/photo-1698075957695-308d15d0771f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "oak tree",
      cost: 20,
      quantity: 0,
      category: 'tree',
    },
    {
      id:14,  
      img: "https://images.unsplash.com/photo-1572990479313-f2403a39dc63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "pine tree",
      cost: 30,
      quantity: 0,
      category: 'tree',
    },
    {
      id:15,  
      img: "https://plus.unsplash.com/premium_photo-1725408105248-444e6c1a0576?q=80&w=822&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "birch tree",
      cost: 25,
      quantity: 0,
      category: 'tree',
    },
    {
      id:16,  
      img: "https://images.unsplash.com/photo-1701738504815-08d1af2e9037?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "maple tree",
      cost: 30,
      quantity: 0,
      category: 'tree',
    },
    {
      id:17,  
      img: "https://images.unsplash.com/photo-1606596597449-d0dcccbba517?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "willow tree",
      cost: 55,
      quantity: 0,
      category: 'tree',
    },
    {
      id:18,  
      img: "https://images.unsplash.com/photo-1633545382904-5e97dedc6e19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "apple tree",
      cost: 60,
      quantity: 0,
      category: 'tree',
    },
    
  ],

  reducers: {
    // increaseQuantity: (state, action) => {
    //     const { payload: id } = action;
    //     if (state.find(item => item.id === id)) {
    //         state[id].quantity++;
    //     }
    // },
    // decreaseQuantity: (state, action) => {
    //     const { payload: id } = action;
    //     if (state.find(item => item.id === id).quantity>0) {
    //         state[id].quantity--;
    //     }
    // },

    // //need to work on 
    // updateQuantity:(state, action) => {
    //     const { payload: id } = action;
    //     if (state.find(item => item.id === id)) {
    //         state[id].quantity--;
    //     }
    // },
   
  },
});

// export const { increaseQuantity, decreaseQuantity } = productsSlice.actions;

export default ProductsSlice.reducer;