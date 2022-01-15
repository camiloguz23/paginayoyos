import { action_type } from "./accion_type";

export const id_method = (id) => ({
    type:action_type.user_id,
    payload:id
})

export const new_method = (employee) => ({
    type:action_type.new_user,
    payload: employee
})