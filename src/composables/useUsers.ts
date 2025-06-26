import { ref, type Ref } from "vue"
import * as userService from "@/api/users"
import type { NewUser, User } from "@/types/User"

export const useUser = () => {
  const user: Ref<User | null> = ref(null)
  const users: Ref<User[]> = ref([])
  const loading: Ref<boolean> = ref(false)
  const error: Ref<string | null> = ref(null)

    const loadUser = async(id: number) => {
    loading.value = true;
    error.value = null
    try {
      user.value = await userService.fetchUserById(id)
    } catch (error) {
      console.error(error)
      error.value = "Failed to load users"
    } finally {
      loading.value = false
    }
  }

  const loadUsers = async() => {
    loading.value = true;
    error.value = null
    try {
      users.value = await userService.fetchUsers()
      return user.value
    } catch (error) {
      console.error(error)
      error.value = "Failed to load users"
    } finally {
      loading.value = false
    }
  }

  const addUser = async(user: NewUser): Promise<User> => {
    loading.value = true;
    error.value = null
    try {
      const newUser = await userService.createUser(user)
      users.value.push(newUser)
      return newUser
    } catch (err) {
      console.error(err)
      err.value = "Failed to create user"
      throw err
    }
  }

const updateUser = async(id: number, updateUser: User): Promise<User> => {
    loading.value = true;
    error.value = null
    try {
      const user = await userService.updateUser(id, updateUser)
      return user
    } catch (error) {
      console.error(error)
      error.value = "Failed to update user"
      throw error
    }
}

const deleteUser = async(id: number): Promise<void> => {
    loading.value = true;
    error.value = null
    try {
      await userService.deleteUser(id)
      users.value = users.value.filter(u => u.id !== id)
    } catch (error) {
      console.error(error)
    }
}

return {
  user,
  users,
  loading,
  error,
  loadUser,
  loadUsers,
  addUser,
  updateUser,
  deleteUser
}


}

