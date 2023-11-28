
export let isProtectOrDetectCapacityActived = false;




export const isProtectOrDetectCapacityActivedByProtectOrDetect =
 function isProtectOrDetectCapacityActivedByProtectOrDetect(
    firstAttacker, 
    secondAttacker
    ) {
    isProtectOrDetectCapacityActived = true;

    if (
        (
            firstAttacker.primaryStatut !== 'normal' ||
            firstAttacker.secondaryStatut !== 'normal'
            ) 
            ||
                (
                    secondAttacker.primaryStatut !== 'normal' || 
                    secondAttacker.secondaryStatut !== 'normal'
                    )

    ) {
        setTimeout(() => {
            isProtectOrDetectCapacityActived = false;
        }, 9000);
    } else {
        setTimeout(() => {
            isProtectOrDetectCapacityActived = false;
        }, 5000);
    };

};