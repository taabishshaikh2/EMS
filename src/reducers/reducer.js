export const initialState = {
    employees: []
}

const reducer = (state, action) =>{
    switch(action.type) {
       
        case 'GET_EMPLOYEE':
            // logic for getting EMPLOYEE           
             return { 
                ...state,
                employees: action.payload
             }
        case 'ADD_EMPLOYEE':
            // logic for adding EMPLOYEE   
            console.log(...state.employees)        
             return { 
                ...state,
                employees: [...state.employees, action.payload],
             }
            
        case 'DELETE_EMPLOYEE':
            // LOGIC FOR REMOVING
            // we cloned the basket
            let newEmployees = [...state.employees];

            
            // console.log(state.employees.map(emp => emp._id))
            const index = state.employees.findIndex((emp) => emp._id === action.id )
            if(index >= 0){
                // item exists in employees, remove it
                
                newEmployees.splice(index, 1);
            }
            else{
                console.warn(
                    `Cant delete employee(id: ${action.id}) `
                )
            }
            return { ...state, employees: newEmployees }
          
            
        default: 
            return state;
    }
}

export default reducer