<template>
  <div class="min-h-[calc(100vh-var(--header-h))] flex items-center justify-center px-4 py-10">
    <div class="surface-2 w-full max-w-md rounded-2xl shadow-sm">
      <div class="p-6 sm:p-8 space-y-4">
        <header class="space-y-2">
          <h1 class="text-2xl font-bold text-heading">
            <span v-if="formSuccess">Success!</span>
            <span v-else> Create an account</span>
          </h1>
          <p v-if="!formSuccess" class="text-muted">
            Already have an account?
            <NuxtLink to="/login" class="font-semibold text-brand hover:underline">
              Login here
            </NuxtLink>.
          </p>
        </header>

        <form v-if="!formSuccess" class="space-y-1" @submit.prevent="onSubmit">
          <div class="space-y-1">
            <label for="fullname" class="field-label" :class="{ 'field-error-label': errors.fullName }">Your full
              name</label>
            <input id="fullname" v-model="fullName" :disabled="isSubmitting" :class="{ 'field-error-input': errors.fullName }"
              @blur="fullNameHandleBlur" type="text" autocomplete="name" placeholder="John Doe" class="field-input"
              required />
            <p class="field-error-slot" :class="{ 'error-text': errors.fullName }">{{ errors.fullName }}</p>
          </div>

          <div class="space-y-1">
            <label for="email" class="field-label" :class="{ 'field-error-label': errors.email }">Your email</label>
            <input id="email" v-model="email" :disabled="isSubmitting" :class="{ 'field-error-input': errors.email }" @blur="emailHandleBlur"
              type="email" autocomplete="email" placeholder="name@company.com" class="field-input" required />
            <p class="field-error-slot" :class="{ 'error-text': errors.email }">{{ errors.email }}</p>
          </div>

          <div class="space-y-1">
            <label for="password" class="field-label" :class="{ 'field-error-label': errors.password }">Password</label>
            <input id="password" v-model="password" :disabled="isSubmitting" :class="{ 'field-error-input': errors.password }"
              @blur="passwordHandleBlur" type="password" autocomplete="new-password" placeholder="••••••••"
              class="field-input" required />
            <p class="field-error-slot" :class="{ 'error-text': errors.password }">{{ errors.password }}</p>
          </div>

          <div class="space-y-1">
            <label for="confirmPassword" class="field-label"
              :class="{ 'field-error-label': errors.confirmPassword }">Confirm password</label>
            <input id="confirmPassword" v-model="confirmPassword" :disabled="isSubmitting" 
              :class="{ 'field-error-input': errors.confirmPassword }" @blur="confirmPasswordHandleBlur" type="password"
              autocomplete="new-password" placeholder="••••••••" class="field-input" required />
            <p class="field-error-slot" :class="{ 'error-text': errors.confirmPassword }">{{
              errors.confirmPassword }}</p>
          </div>

          <div class="space-y-3">
            <div>
              <div class="flex items-center gap-3">
                <input id="terms" v-model="acceptedTerms" :disabled="isSubmitting" type="checkbox" class="h-4 w-4 rounded border-base surface
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400" required />
                <label for="terms" class="field-label">
                  I accept the
                  <NuxtLink to="#" class="font-medium text-brand hover:underline">
                    Terms and Conditions
                  </NuxtLink>
                </label>

              </div>
              <p class="field-error-slot" :class="{ 'error-text': errors.acceptedTerms }">{{ errors.acceptedTerms
                }}</p>
            </div>
            <p v-if="formError" class="text-sm error-text">
              {{ formError }}
            </p>

            <button type="submit" :disabled="isSubmitting" class="w-full btn-primary justify-center">
              <span v-if="isSubmitting === true">Registering...</span>
              <span v-else>Create an account</span>
            </button>

            <p class="text-sm text-muted">
              Already have an account?
              <NuxtLink to="/login" class="font-medium text-brand hover:underline">
                Login here
              </NuxtLink>
            </p>
          </div>
        </form>
        <div v-if="formSuccess" class="space-y-4">
          <p class="text-base text-muted">If an account exists for that email, we sent a confirmation link. Please check your inbox. Once confirmed, you’ll be signed in automatically.</p>
          <NuxtLink to="/" class="flex font-medium text-brand hover:underline justify-center">
            Start shopping
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { RegisterSchema } from '~/shared/schemas/account'

const { handleSubmit, errors, isSubmitting, resetForm } = useForm({
  validationSchema: toTypedSchema(RegisterSchema),
  initialValues: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  },
})

const { value: fullName, handleBlur: fullNameHandleBlur } = useField<string>('fullName')
const { value: email, handleBlur: emailHandleBlur } = useField<string>('email')
const { value: password, handleBlur: passwordHandleBlur } = useField<string>('password')
const { value: confirmPassword, handleBlur: confirmPasswordHandleBlur } = useField<string>('confirmPassword')
const { value: acceptedTerms } = useField<boolean>('acceptedTerms')

const formSuccess = ref(false)
const formError = ref<string | null>(null);

const origin = useRequestURL().origin
const supabase = useSupabaseClient();

const onSubmit = handleSubmit(async (values) => {
  formError.value = ''
  formSuccess.value = false

  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: {
        full_name: values.fullName,
      },
      emailRedirectTo: `${origin}/confirm-registration`,
    }
  });
  if (error) {
    const msg = error.message || 'An error occurred during registration.';
    formError.value = msg;
    return
  }

  resetForm();
  formSuccess.value = true
})

</script>
