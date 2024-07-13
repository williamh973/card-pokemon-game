export let isProtectOrDetectCapacityActived = false;

export function protectionActived() {
  isProtectOrDetectCapacityActived = true;
}

export function disabledProtectCapacity() {
  isProtectOrDetectCapacityActived = false;
}
