import { onMounted, onBeforeUnmount } from "vue"

export const useClickOutside = (
  target: Ref<HTMLElement | null>,
  handler: () => void
) => {
  const listener = (event: MouseEvent | TouchEvent) => {
    const el = target?.value
    if (!el || el.contains(event.target as Node)) {
      return
    }
    handler()
  }

  onMounted(() => {
    document.addEventListener("click", listener)
    document.addEventListener("touchstart", listener)
  })

  onBeforeUnmount(() => {
    document.removeEventListener("click", listener)
    document.removeEventListener("touchstart", listener)
  })  
}
