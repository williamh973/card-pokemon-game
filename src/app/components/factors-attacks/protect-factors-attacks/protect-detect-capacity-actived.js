
export let isProtectOrDetectCapacityActived = false;


export function protectionActived() {
    isProtectOrDetectCapacityActived = true;
};


export function deseableProtectCapacity() {
    isProtectOrDetectCapacityActived = false;
    console.log("isProtectOrDetectCapacityActived", isProtectOrDetectCapacityActived);
  };
