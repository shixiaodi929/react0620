/**
 * 用于创建action（多个）对象：
 */

 import { INCREEMENT,DECREEMENT } from "../action-types/action-types";

//  同步增加
export const increment = (number)=>({type: INCREEMENT, data: number})

// 同步减少
export const decrement = (number)=>({type: DECREEMENT, data: number})

// 异步增加
export const incrementAsync = ()