<template>
  <div class="min-h-[calc(100vh-var(--header-h))] flex items-center justify-center px-4 py-10">
    <div class="surface-2 w-full max-w-md rounded-2xl shadow-sm">
      <div class="p-6 sm:p-8 space-y-6">
        <header class="space-y-2">
          <h1 class="text-2xl font-bold text-heading">Log in to your account</h1>
          <p class="text-muted">
            Don't have an account?
            <NuxtLink to="/register" class="font-semibold text-brand hover:underline">
              Create an Account
            </NuxtLink>.
          </p>
        </header>

        <form class="space-y-1" @submit.prevent="onSubmit">
          <div class="space-y-1">
            <label for="email" class="field-label">Your email</label>
            <input id="email" v-model="email" :disabled="isSubmitting" @blur="emailHandleBlur" type="email"
              autocomplete="email" placeholder="name@company.com" class="field-input" required
              :class="{ 'field-error-label': errors.email }" />
            <p class="field-error-slot" :class="{ 'error-text': errors.email }">{{ errors.email }}</p>
          </div>
          <div class="space-y-1">
            <label for="password" class="field-label">Password</label>
            <input id="password" v-model="password" :disabled="isSubmitting" @blur="passwordHandleBlur" type="password"
              autocomplete="current-password" placeholder="••••••••" class="field-input" required
              :class="{ 'field-error-label': errors.password }" />
            <p class="field-error-slot" :class="{ 'error-text': errors.password }">{{ errors.password }}</p>
          </div>
          <div class="space-y-3">
            <div>
              <div class="flex items-center gap-3">
                <input id="terms" v-model="acceptedTerms" :disabled="isSubmitting" type="checkbox" class="h-4 w-4 rounded border-base surface
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400" required />
                <label for="terms" class="text-sm text-muted">
                  I accept the
                  <NuxtLink to="#" class="font-medium text-brand hover:underline">
                    Terms and Conditions
                  </NuxtLink>
                </label>
              </div>
              <p class="field-error-slot" :class="{ 'error-text': errors.acceptedTerms }">{{ errors.acceptedTerms
                }}</p>
            </div>
            <button type="submit" :disabled="isSubmitting" class="w-full btn-primary justify-center">
              <span v-if="isSubmitting === true">Requesting...</span>
              <span v-else>Login</span>
            </button>
            <div class="text-sm">
              <NuxtLink to="/forgot-password" class="text-brand hover:underline">
                Forgot password?
              </NuxtLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod';
import { LoginSchema } from '@commerce/shared/schemas/account';

const { handleSubmit, errors, isSubmitting, resetForm } = useForm({
  validationSchema: toTypedSchema(LoginSchema),
  initialValues: {
    email: '',
    password: '',
    acceptedTerms: false,
  },
});

const { value: email, handleBlur: emailHandleBlur } = useField<string>('email');
const { value: password, handleBlur: passwordHandleBlur } = useField<string>('password');
const { value: acceptedTerms } = useField<boolean>('acceptedTerms');

const formSuccess = ref(false);
const formError = ref<string | null>(null);

const origin = useRequestURL().origin
const supabase = useSupabaseClient();

const onSubmit = handleSubmit(async (values) => {
  formError.value = ''
  formSuccess.value = false

  const { error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,        
  });
  if (error) {
    const msg = error.message || 'An error occurred during login.';
    formError.value = msg;
    return
  }

  await navigateTo('/')
  formSuccess.value = true

})
</script>
