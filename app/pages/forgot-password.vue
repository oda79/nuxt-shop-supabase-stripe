<template>
  <div class="min-h-[calc(100vh-var(--header-h))] flex items-center justify-center px-4 py-10">
    <div class="surface-2 w-full max-w-md rounded-2xl shadow-sm">
      <div class="p-6 sm:p-8 space-y-6">
        <header class="space-y-2">
          <h1 class="text-2xl font-bold text-heading">Reset your password</h1>
          <p class="text-muted">
            Enter your email and we’ll send you a reset link.
          </p>
        </header>

        <form class="space-y-5" @submit.prevent="onSubmit">
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-heading">Your email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              autocomplete="email"
              placeholder="name@company.com"
              class="w-full rounded-lg border-base surface px-3 py-2.5 text-heading placeholder:text-gray-400 dark:placeholder:text-gray-500
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              required
            />
          </div>

          <button type="submit" class="w-full btn-primary justify-center">
            Send reset link
          </button>

          <div class="text-sm text-muted flex items-center justify-between">
            <NuxtLink to="/login" class="text-brand hover:underline">
              Back to login
            </NuxtLink>

            <NuxtLink to="/register" class="text-brand hover:underline">
              Create account
            </NuxtLink>
          </div>
        </form>

        <p v-if="sent" class="text-sm text-muted">
          If an account exists for that email, you’ll receive a reset link shortly.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const sent = ref(false)

async function onSubmit() {
  // TODO: Supabase reset password flow (auth.resetPasswordForEmail)
  sent.value = true
}
</script>
