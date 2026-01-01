<template>
  <div class="min-h-[calc(100vh-var(--header-h))] flex items-center justify-center px-4">
    <div class="surface-2 w-full max-w-md rounded-2xl shadow-sm p-6 text-center">
      <p class="text-heading font-semibold">Confirming your email…</p>
      <p class="text-muted mt-2">You will be redirected automatically.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const supabase = useSupabaseClient()

const code = route.query.code

if (typeof code === 'string') {
  const { error } = await supabase.auth.exchangeCodeForSession(code)
  if (error) {
    await navigateTo('/login?error=confirm')
  } else {
    await navigateTo('/')
  }
} else {
  await navigateTo('/login')
}


</script>

<style></style>