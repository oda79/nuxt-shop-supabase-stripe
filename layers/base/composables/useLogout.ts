
export const useLogout = () => {
  const supabase = useSupabaseClient()

  async function logout() {
    await supabase.auth.signOut()
    await navigateTo('/login')
  }
  return { logout }
}
