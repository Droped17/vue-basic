import type { NewUser, User } from "@/types/User";
import axios from "axios";

/* GET */
export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>(`${import.meta.env.VITE_API_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

/* GET by id */
export const fetchUserById = async (id: number): Promise<User> => {
  try {
    const res = await axios.get<User>(`${import.meta.env.VITE_API_URL}/${id}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

/* POST */
export const createUser = async(user: NewUser): Promise<User> => {
  try {
    const res = await axios.post<User>(import.meta.env.VITE_API_URL, user)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

/* UPDATE user */
export const updateUser = async(id: number, user: User): Promise<User> => {
  try {
    const res= await axios.put<User>((`${import.meta.env.VITE_API_URL}/${id}`), user)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

/* DELETE user */
export const deleteUser = async(id: number): Promise<void> => {
  try {
    const res = await axios.delete<void>(`${import.meta.env.VITE_API_URL}/${id}`)
    console.log(res.data);
  } catch (error) {
    console.error(error)
    throw error
  }
}
